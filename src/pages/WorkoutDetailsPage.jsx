import { Box, Button, Paper, Stack, Step, StepButton, Stepper, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { BACKEND_API } from "../config/api"
import { workoutDetailTitleCard } from "../styles/styles";
import { useParams } from "react-router-dom";



export default function WorkoutDetailsPage() {
    const [ currentWorkout, setCurrentWorkout ] = useState({});
    const { workoutId } = useParams();
    const [ activeStep, setActiveStep ] = useState(0);
    const [ completed, setCompleted ] = useState({});
    const steps = currentWorkout.exercises;

    const totalSteps = () => {
        return steps && steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
            ? steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    useEffect(() => {
        axios.get(BACKEND_API + 'workoutplans')
        .then((response) => {
            response.data.forEach((workout, i) => {
                if(workout.id == workoutId){
                    setCurrentWorkout(workout)
                }
            })
        })
        .catch((error) => {
            console.log("uh oh: " + error)
        })
    }, [])




    return(
        <>
            <Box sx={{width: '100%'}}>
                <Paper
                    sx={workoutDetailTitleCard} 
                    elevation={10} 
                    square={false}
                >
                    {currentWorkout.name}
                </Paper>




                <Box sx={{ width: '100%' }}>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps && steps.map((label, index) => (
                            <Step key={label.id} completed={completed[index]}>
                                <StepButton onClick={() => {handleStep(index)}}>
                                    {label.name}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {allStepsCompleted() ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    You&apos;ve finished workout '{currentWorkout.name}', click RESET to start again.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box>
                                    <br />
                                    {currentWorkout.exercises && 
                                    <>
                                        <Typography variant="h6">
                                            {currentWorkout.exercises[activeStep].name} || 
                                            Sets: {currentWorkout.exercises[activeStep].reps} || 
                                            Reps: {currentWorkout.exercises[activeStep].sets}
                                        </Typography>

                                        <br />

                                        <Typography>
                                            Workout type: {currentWorkout.exercises[activeStep].type}
                                        </Typography>

                                        <Typography>
                                            Workout difficulty: {currentWorkout.exercises[activeStep].difficulty}
                                        </Typography>
                                        <Typography>
                                            Target muscle: {currentWorkout.exercises[activeStep].muscle}
                                        </Typography>
                                        <Typography>
                                            Equipment needed: {currentWorkout.exercises[activeStep].equipment}
                                        </Typography>
                                        
                                        <br />

                                        <Typography>
                                            {currentWorkout.exercises[activeStep].instructions}
                                        </Typography>
                                    </>
                                    }
                                </Box>


                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                                        Next
                                    </Button>
                                    {steps && activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                Step {activeStep + 1} already completed
                                            </Typography>
                                        ) : (
                                            <Button onClick={handleComplete}>
                                                {completedSteps() === totalSteps() - 1
                                                    ? 'Finish'
                                                    : 'Complete Exercise'}
                                            </Button>
                                        ))}
                                </Box>
                            </>
                        )}
                    </div>
                </Box>
            </Box>
        </>
    )
}