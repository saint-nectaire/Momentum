import { Box, Paper } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { FAKE_API } from "../config/api"
import { paperStyles } from "../styles/styles";



export default function WorkoutOverview() {
const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        axios.get(FAKE_API + 'workoutplans')
        .then((response) => {
            setWorkouts([...workouts, response.data])
        })
        .catch((error) => {
            console.log("uh oh: " + error)
        })
    }, [])


    return(
        <>
            <Box>
                {workouts && workouts.map((workout,i) => {
                    return(
                        <Paper
                            key={i} 
                            sx={paperStyles} 
                            elevation={10} 
                            square={false}                       
                        >
                            {workout.name}
                        </Paper>

                    )
                })}

            </Box>
        </>
    )
}