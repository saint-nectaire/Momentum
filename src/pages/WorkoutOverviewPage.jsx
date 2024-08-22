import { Box, IconButton, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_API } from "../config/api"
import { inlineBoxStyle, workoutOverviewBox, workoutOverviewCard } from "../styles/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AddWorkout from "../components/AddWorkout";
import UpdateWorkout from "../components/UpdateWorkout";
import { deleteWorkout } from "../services/workoutService";
import PageHeader from "../components/PageHeader";


export default function WorkoutOverviewPage() {
const [ workouts, setWorkouts ] = useState([]);
const [ isAddingWorkout, setIsAddingWorkout ] = useState(false);
const [ isEditingWorkout, setIsEditingWorkout ] = useState(false);
const [ editingWorkout, setEditingWorkout ] = useState({});

const fetchWorkoutPlans= () => {
    axios.get(BACKEND_API + 'workoutplans')
    .then((response) => {
        setWorkouts(response.data)
    })
    .catch((error) => {
        console.log("uh oh: " + error)
    })
}

    useEffect(() => {
        fetchWorkoutPlans()
    }, [])

    const handleEdit = (workout) => {
        if(isAddingWorkout){setIsAddingWorkout(false)}
        setIsEditingWorkout(true);
        setEditingWorkout(workout);
    }
    
    const handleAdd = () => {
        if(isEditingWorkout){setIsEditingWorkout(false)}
        setIsAddingWorkout(true)
    }


    const handleDelete = async (id) => {
        await deleteWorkout(id);
        fetchWorkoutPlans();
    };

    const handleSuccess = () => {
        fetchWorkoutPlans();
    };


    return(
        <>
            <PageHeader
                title="Workout Overview"
            />

            <Box sx={workoutOverviewBox}>
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
                                    to={`/workouts/${workout.id}`}
                                    component={RouterLink}
                                    sx={{minWidth:'200px', display:'flex', justifyContent:'center'}}
                                >
                                    <Typography sx={{textAlign:'left'}} color="primary" variant="h5">
                                        {workout.name}
                                    </Typography>
                                </Link>

                                <IconButton onClick={() => {handleEdit(workout)}}>
                                    <EditIcon/>
                                </IconButton>

                                <IconButton onClick={() => handleDelete(workout.id)} color="secondary">
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
                <Box sx={{width:'20rem', height:'auto', flexGrow:1, backgroundColor:'#121212', margin:'20px', outline: '40px solid #121212',}}></Box>
                <Box sx={{width:'20rem', height:'auto', flexGrow:1, backgroundColor:'#121212', margin:'20px', outline: '40px solid #121212',}}></Box>

            </Box>

            {isAddingWorkout && <AddWorkout setIsAddingWorkout={setIsAddingWorkout} onSuccess={handleSuccess} />}
            {isEditingWorkout && <UpdateWorkout setIsEditingWorkout={setIsEditingWorkout} onSuccess={handleSuccess} editingWorkout={editingWorkout}/>}



        </>
    )
}