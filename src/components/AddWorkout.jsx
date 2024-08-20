import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { closeButton, paperStyles, exercisePaperStyles, buttonContainer } from "../styles/styles";
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { FAKE_API, NINJA_API, NINJA_KEY } from "../config/api";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';




function AddWorkout() {
  const [workout, setWorkout] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [muscle, setMuscle] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [workoutName, setWorkoutName] = useState('New Workout');
  const [editingName, setEditingName] = useState(false);


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

        axios.get(NINJA_API + queryString, {headers: { 'X-Api-Key': NINJA_KEY }})
        .then((response) => {
            setExercises([...response.data])
        })
        .catch((error) => {console.log(error)})
    }, [muscle, exerciseType, difficulty])

    const handleClickOpen = () => {
        setDialogOpen(true);
    }

    const handleClickClose = () => {
        setDialogOpen(false);
    }

    const handleChangeMuscle = (e) => {
        setMuscle(e.target.value)
    }

    const handleChangeType = (e) => {
        setExerciseType(e.target.value)
    }

    const handleChangeDifficulty = (e) => {
        setDifficulty(e.target.value)
    }
    
    const handleSaveWorkout = () => {
        let newId = axios.get(FAKE_API + '/workoutplans').length + 1;
        let newWorkout = {
            id: newId,
            name: workoutName,
            exercises: workout
        }
        
        axios.post(FAKE_API + '/workoutplans', newWorkout)
    }
    
    const handleChangeName = () => {
        if(editingName){
            setEditingName(false)

        } else if(!editingName){
            setEditingName(true)
        }
    }


    return ( 
        <>
            <Box sx={buttonContainer}>
            {editingName ? 
            <><TextField onChange={(v) => {setWorkoutName(v.target.value)}} fullWidth label="workoutName" id="workoutName"/> <IconButton onClick={handleChangeName}><CheckIcon /></IconButton></> : 
            <><Typography>{workoutName}</Typography> <IconButton onClick={handleChangeName}><EditIcon /></IconButton></>}
            </Box>


            {workout && workout.map((exercise, i) => {
                return(
                        <Paper 
                            key={i} 
                            sx={paperStyles} 
                            elevation={10} 
                            square={false}
                        >
                            {exercise.name}


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
                        </Paper>
                )
            })} 

            <Paper sx={paperStyles} elevation={10} square={false}>
                add exercise
                <IconButton onClick={handleClickOpen}><AddIcon /></IconButton>
            </Paper>


            <Button onClick={handleSaveWorkout} variant="contained">Save Workout Plan</Button>

            <Dialog
                onClose={handleClickClose}
                open={dialogOpen}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Choose an exercise
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClickClose}
                    sx={closeButton}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    <Box sx={buttonContainer}>
                        <FormControl fullWidth>
                            <InputLabel id="muscle-select-label">Muscle</InputLabel>
                            <Select 
                                labelId="muscle-select-label"
                                id="muscle-select"
                                value={muscle}
                                onChange={handleChangeMuscle}
                                >
                                    <MenuItem value={"abdominals"}>Abdominals</MenuItem>
                                    <MenuItem value={"abductors"}>Abductors</MenuItem>
                                    <MenuItem value={"adductors"}>Adductors</MenuItem>
                                    <MenuItem value={"biceps"}>Biceps</MenuItem>
                                    <MenuItem value={"calves"}>Calves</MenuItem>
                                    <MenuItem value={"chest"}>Chest</MenuItem>
                                    <MenuItem value={"forearms"}>Forearms</MenuItem>
                                    <MenuItem value={"glutes"}>Glutes</MenuItem>
                                    <MenuItem value={"hamstrings"}>Hamstrings</MenuItem>
                                    <MenuItem value={"lats"}>Lats</MenuItem>
                                    <MenuItem value={"lower_back"}>Lower Back</MenuItem>
                                    <MenuItem value={"middle_back"}>Middle Back</MenuItem>
                                    <MenuItem value={"neck"}>Neck</MenuItem>
                                    <MenuItem value={"quadriceps"}>Quadriceps</MenuItem>
                                    <MenuItem value={"traps"}>Traps</MenuItem>
                                    <MenuItem value={"triceps"}>Triceps</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="exercise-type-select-label">Exercise Type</InputLabel>
                            <Select 
                                labelId="exercise-type-select-label"
                                id="exercise-type-select"
                                value={exerciseType}
                                onChange={handleChangeType}
                                
                                >
                                    <MenuItem value={"cardio"}>Cardio</MenuItem>
                                    <MenuItem value={"olympic_weightlifting"}>Olympic weightlifting</MenuItem>
                                    <MenuItem value={"plyometrics"}>Plyometrics</MenuItem>
                                    <MenuItem value={"powerlifting"}>Powerlifting</MenuItem>
                                    <MenuItem value={"strength"}>Strength</MenuItem>
                                    <MenuItem value={"stretching"}>Stretching</MenuItem>
                                    <MenuItem value={"strongman"}>Strongman</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
                            <Select 
                                labelId="difficulty-select-label"
                                id="difficulty-select"
                                value={difficulty}
                                onChange={handleChangeDifficulty}
                                >
                                    <MenuItem value={"beginner"}>Beginner</MenuItem>
                                    <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                                    <MenuItem value={"expert"}>Expert</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Divider />

                    {exercises.map((exercise, i) => {
                        return(
                            <Paper 
                                key={i} 
                                sx={exercisePaperStyles} 
                                elevation={10} 
                                square={false}
                            >
                                {exercise.name}

                                <IconButton onClick={() => {
                                    let newExercise = {...exercise}
                                    newExercise.id = workout.length + 1;
                                    newExercise.sets = 5;
                                    newExercise.reps = 10;
                                    setWorkout([...workout, newExercise])
                                    }}
                                ><AddIcon /></IconButton>
                            </Paper>
                        )

                    })}

                </DialogContent>
                <DialogActions>
                    <Button variant="contained" autoFocus onClick={handleClickClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>





        </>
    );
}


export default AddWorkout;