import { useEffect, useState } from "react";
import axios from "axios";
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { closeButton, paperStyles, exercisePaperStyles } from "../styles/styles";
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { NINJA_API, NINJA_KEY } from "../config/api";




function AddWorkout() {
  const [workout, setWorkout] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [muscle, setMuscle] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [difficulty, setDifficulty] = useState('');

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

    return ( 
        <>

            {workout && workout.map((exercise, i) => {
                return(
                        <Paper 
                            key={i} 
                            sx={paperStyles} 
                            elevation={10} 
                            square={false}
                        >
                            {exercise.name}
                        </Paper>
                )
            })} 

            <Paper sx={paperStyles} elevation={10} square={false}>
                add exercise
                <IconButton onClick={handleClickOpen}><AddIcon /></IconButton>
            </Paper>


            <Dialog
                onClose={handleClickClose}
                open={dialogOpen}
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
                    <FormControl>
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

                    <FormControl>
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

                    <FormControl>
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

                                <IconButton onClick={() => {setWorkout([...workout, exercise])}}><AddIcon /></IconButton>
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