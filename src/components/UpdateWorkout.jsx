import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, IconButton, Paper, TextField, Typography } from "@mui/material";
import { exercisePaperStyles, buttonContainer, addworkoutButton } from "../styles/styles";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { BACKEND_API, NINJA_API } from "../config/api";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete'
import CreateDialog from "./CreateDialog";
import { updateWorkout } from "../services/workoutService";
import ExercisesFilter from '../components/ExercisesFilter';


export default function UpdateWorkout({editingWorkout, setIsEditingWorkout, onSuccess}) {
    const [workout, setWorkout] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [muscle, setMuscle] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [workoutName, setWorkoutName] = useState('');
    const [editingName, setEditingName] = useState(false);

    useEffect(() => {    
        let thisWorkout = structuredClone(editingWorkout);
        setWorkout(thisWorkout.exercises);
        setWorkoutName(thisWorkout.name);
}, [editingWorkout])

    useEffect(() => {
        const queryParams = [];

        if (muscle.length !== 0) {
            queryParams.push(`muscle=${muscle}`);
        }
        if (exerciseType.length !== 0) {
            queryParams.push(`type=${exerciseType}`);
        }
        if (difficulty.length !== 0) {
            queryParams.push(`difficulty=${difficulty}`);
        }
    
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

        const ninjaRequest = axios.get(NINJA_API.url + queryString, { headers: { 'X-Api-Key': NINJA_API.key } });
        const backendRequest = axios.get(BACKEND_API + '/exercises');

        Promise.all([ninjaRequest, backendRequest])
            .then(([ninjaResponse, backendResponse]) => {
                const ninjaNames = ninjaResponse.data.map(exercise => exercise.name);
                const filteredBackendData = backendResponse.data.filter(exercise => !ninjaNames.includes(exercise.name));

                setExercises([
                    ...ninjaResponse.data,
                    ...filteredBackendData
                ]);
            })
            .catch((error) => {console.log(error)})


    }, [muscle, exerciseType, difficulty])


    const handleClickOpen = () => {
        setDialogOpen(true);
    }

    const handleClickClose = () => {
        setDialogOpen(false);
    }

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'muscle':
                setMuscle(value);
                break;
            case 'type':
                setExerciseType(value);
                break;
            case 'difficulty':
                setDifficulty(value);
                break;
            default:
                break;
        }
    };
    
    const handleSaveWorkout = async () => {
        let newWorkout = {
            id: editingWorkout.id,
            name: workoutName,
            exercises: workout
        }

        await updateWorkout(newWorkout.id, newWorkout);
        setIsEditingWorkout(false);
        console.log(111)
        onSuccess();
    }
    
    const handleChangeName = () => {
        if(editingName){
            setEditingName(false)

        } else if(!editingName){
            setEditingName(true)
        }
    }

    const handleDeleteExerciseFromWorkout = (id) => {
        console.log(id)
        let newWorkout = {
            id: editingWorkout.id,
            name: workoutName,
            exercises: workout.filter(exercise => exercise.id != id)
        }
        setWorkout(workout.filter(exercise => exercise.id != id))
        updateWorkout(newWorkout.id, newWorkout)
    }


    return(
        <>
            <Box sx={buttonContainer}>
            {editingName ? 
                <><TextField sx={{width:'320px'}} autoFocus onChange={(v) => {setWorkoutName(v.target.value)}} fullWidth label="Workout Name" id="workoutName"/> <IconButton onClick={handleChangeName}><CheckIcon /></IconButton></> : 
                <><Typography>{workoutName}</Typography> <IconButton onClick={handleChangeName}><EditIcon /></IconButton></>}
            </Box>


            {workout && workout.map((exercise, i) => {
                return(
                        <Paper 
                            key={i} 
                            sx={exercisePaperStyles} 
                            elevation={10} 
                            square={false}
                        >
                            {exercise.name}

                            <Box>
                                <Typography display={'inline'}>Sets:</Typography>
                                <IconButton onClick={() => {
                                    let newWorkout = [...workout];
                                    if(newWorkout[i].sets > 0) {
                                        newWorkout[i].sets -= 1;
                                    }
                                    setWorkout(newWorkout);
                                }}>
                                    <RemoveIcon />
                                </IconButton>

                                {workout[i].sets}
                                
                                <IconButton onClick={() => {
                                    let newWorkout = [...workout];
                                    if(newWorkout[i].sets > 0) {
                                        newWorkout[i].sets += 1;
                                    }
                                    setWorkout(newWorkout);
                                }}>
                                    <AddIcon />
                                </IconButton>
                            </Box>


                            <Box>
                                <Typography display={'inline'}>Reps:</Typography>
                                <IconButton onClick={() => {
                                    let newWorkout = [...workout];
                                    if(newWorkout[i].reps > 0) {
                                        newWorkout[i].reps -= 1;
                                    }
                                    setWorkout(newWorkout);
                                }}>
                                    <RemoveIcon />
                                </IconButton>
                                
                                {workout[i].reps}
                                
                                <IconButton onClick={() => {
                                    let newWorkout = [...workout];
                                    if(newWorkout[i].reps > 0) {
                                        newWorkout[i].reps += 1;
                                    }
                                    setWorkout(newWorkout);
                                }}>
                                    <AddIcon />
                                </IconButton>
                            </Box>

                            <IconButton onClick={() => {handleDeleteExerciseFromWorkout(exercise.id)}} color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                )
            })} 


            <Paper sx={exercisePaperStyles} elevation={10} square={false}>
                add exercise
                <IconButton onClick={handleClickOpen}><AddIcon /></IconButton>
            </Paper>


            <Box sx={buttonContainer}>
                <Button 
                    onClick={() => {setIsEditingWorkout(false)}} 
                    variant="contained"
                    sx={addworkoutButton}
                    >
                    Cancel
                </Button>

                <Button 
                    onClick={handleSaveWorkout} 
                    variant="contained"
                    sx={addworkoutButton}
                    >
                    Save Workout Plan
                </Button>
            </Box>

            <CreateDialog
                open={dialogOpen}
                onClose={handleClickClose}
                title="Choose an Exercise"
                actions={<Button variant="contained" autoFocus onClick={handleClickClose}>Save Changes</Button>}
            >
                <ExercisesFilter
                    muscle={muscle}
                    type={exerciseType}
                    difficulty={difficulty}
                    handleFilterChange={handleFilterChange}
                    resetFilters={() => {
                        setMuscle('');
                        setExerciseType('');
                        setDifficulty('');
                    }}
                />
                <Divider />
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>
                    {exercises.map((exercise, i) => (
                        <Paper
                            key={i}
                            sx={exercisePaperStyles}
                            elevation={10}
                            square={false}
                        >
                            {exercise.name}
                            <IconButton onClick={() => {
                                let newExercise = { ...exercise };
                                newExercise.id = workout.length + 1;
                                newExercise.sets = 5;
                                newExercise.reps = 10;
                                setWorkout([...workout, newExercise]);
                            }}>
                            <AddIcon />
                            </IconButton>
                        </Paper>
                    ))}
                </Box>
            </CreateDialog>



        </>
    )
}