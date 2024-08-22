import { Box, IconButton, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_API } from "../config/api"
import { inlineBoxStyle, workoutOverviewCard } from "../styles/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AddWorkout from "./AddWorkout";
import UpdateWorkout from "./UpdateWorkout";
import { deleteWorkout } from "../services/workoutService";




export default function WorkoutOverview() {
const [ workouts, setWorkouts ] = useState([]);
const [ isAddingWorkout, setIsAddingWorkout ] = useState(false);
const [ isEditingWorkout, setIsEditingWorkout ] = useState(false);
const [ editingWorkout, setEditingWorkout ] = useState({});

    useEffect(() => {
        axios.get(BACKEND_API + 'workoutplans')
        .then((response) => {
            setWorkouts(response.data)
        })
        .catch((error) => {
            console.log("uh oh: " + error)
        })
    }, [workouts])

    const handleEdit = (workout) => {
        if(isAddingWorkout){setIsAddingWorkout(false)}
        setIsEditingWorkout(true);
        setEditingWorkout(workout);
    }
    
    const handleAdd = () => {
        if(isEditingWorkout){setIsEditingWorkout(false)}
        setIsAddingWorkout(true)
    }


    return(
        <>

            <Box>
                <Typography variant="h4" sx={{textAlign:'center'}}>
                    Workout Overview
                </Typography>
            </Box>


            <Box sx={{flexWrap : "wrap", display: "flex", justifyContent: 'center', marginBottom:'40px'}}>
                {workouts && workouts.map((workout, i) => {
                    return(
                        <Paper
                            key={i} 
                            sx={workoutOverviewCard} 
                            elevation={10} 
                            square={false}                       
                        >
                            <Box sx={inlineBoxStyle}>
                                <Link 
                                    underline="none"
                                    to={`/workouts/${i+1}`}
                                    component={RouterLink}
                                    sx={{minWidth:'200px', display:'flex', justifyContent:'center'}}
                                >
                                    <Typography sx={{textAlign:'left'}} color="primary" variant="h5">
                                        {workout.name}
                                    </Typography>
                                </Link>
                                <IconButton onClick={() => {handleEdit(workout)}}><EditIcon/></IconButton>
                                <IconButton onClick={() => deleteWorkout(workout.id)} color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <Typography variant="h6">
                                    Amount of exercises: {workout.exercises?.length || 0}
                                </Typography>
                            </Box>
                        
                        </Paper>

                    )
                })}
                {!isAddingWorkout &&
                    <Paper
                        sx={workoutOverviewCard} 
                        elevation={10} 
                        square={false}    
                    >
                        <IconButton onClick={() => {handleAdd()}}>Add Workout<AddIcon/></IconButton>
                    </Paper>
                }

            </Box>

            {isAddingWorkout && <AddWorkout setIsAddingWorkout={setIsAddingWorkout}/>}
            {isEditingWorkout && <UpdateWorkout setIsEditingWorkout={setIsEditingWorkout} editingWorkout={editingWorkout}/>}



        </>
    )
}