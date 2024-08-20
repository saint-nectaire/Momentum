import { Box, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_API } from "../config/api"
import { paperStyles, workoutOverviewCard } from "../styles/styles";
import { Link } from "react-router-dom";



export default function WorkoutOverview() {
const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_API + 'workoutplans')
        .then((response) => {
            setWorkouts(response.data)
        })
        .catch((error) => {
            console.log("uh oh: " + error)
        })
    }, [workouts])


    return(
        <>

            <Box>
                <Typography variant="h4" sx={{textAlign:'center'}}>
                    Workout overview
                </Typography>
            </Box>


            <Box sx={{flexWrap : "wrap", display: "flex"}}>
                {workouts && workouts.map((workout, i) => {
                    return(
                        <Paper
                            key={i} 
                            sx={workoutOverviewCard} 
                            elevation={10} 
                            square={false}                       
                        >
                            <Box>
                                <Link to={`/workouts/${i+1}`}>
                                    <Typography variant="h5">
                                        {workout.name}
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Typography variant="h6">
                                    Amount of exercises: {workout.exercises.length}
                                </Typography>
                            </Box>
                        </Paper>

                    )
                })}

            </Box>
        </>
    )
}