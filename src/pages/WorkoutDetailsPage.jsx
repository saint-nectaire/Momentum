import { Box, Button, Paper, Stack, Step, StepButton, Stepper, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { BACKEND_API } from "../config/api"
import { workoutDetailTitleCard } from "../styles/styles";
import { useNavigate, useParams } from "react-router-dom";



export default function WorkoutDetailsPage() {
    const [ currentWorkout, setCurrentWorkout ] = useState({});
    const { workoutId } = useParams();
    const [ activeStep, setActiveStep ] = useState(0);
    const [ completed, setCompleted ] = useState({});

    const steps = currentWorkout.exercises;
    const navigate = useNavigate();

    const stepFunctions = {
        totalSteps: () => {
            return steps && steps.length;
        },

        completedSteps: () => {
            return Object.keys(completed).length;
        },

        isLastStep: () => {
            return activeStep === stepFunctions.totalSteps() - 1;
        },

        allStepsCompleted: () => {
            return stepFunctions.completedSteps() === stepFunctions.totalSteps();
        },

        handleNext: () => {
            const newActiveStep =
            stepFunctions.isLastStep() && !stepFunctions.allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
            setActiveStep(newActiveStep);
        },

        handleBack: () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        },

        handleStep: (step) => () => {
            setActiveStep(step);
        },

        handleComplete: () => {
            const newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            stepFunctions.handleNext();
        },

        handleReset: () => {
            setActiveStep(0);
            setCompleted({});
        }
    }


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
                    
                    <Typography variant="h4">{currentWorkout.name && currentWorkout.name.toUpperCase()}</Typography>
                </Paper>




                <Box sx={{ width: '100%' }}>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps && steps.map((label, index) => (
                            <Step key={label.id} completed={completed[index]}>
                                <StepButton onClick={() => {stepFunctions.handleStep(index)}}>
                                    {label.name}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {stepFunctions.allStepsCompleted() ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    You&apos;ve finished workout '{currentWorkout.name}', click RESET to start again.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={stepFunctions.handleReset}>Reset</Button>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box>
                                    <br />
                                    {currentWorkout.exercises && 
                                    <>
                                        <Typography variant="h6">
                                            {currentWorkout.exercises[activeStep].name} --- 
                                            Sets: {currentWorkout.exercises[activeStep].reps} --- 
                                            Reps: {currentWorkout.exercises[activeStep].sets}
                                        </Typography>

                                        <br />

                                        <Box sx={{display:'flex'}}>
                                            <Box>
                                                <Typography>
                                                    Workout Type -<br />
                                                    Workout Difficulty -<br />
                                                    Target Muscle -<br />
                                                    Equipment Needed -<br />
                                                </Typography>
                                            </Box>
                                            <Box sx={{marginLeft:'30px'}}>
                                                <Typography>
                                                    -{currentWorkout.exercises[activeStep].type[0].toUpperCase() + currentWorkout.exercises[activeStep].type.slice(1)} <br />
                                                    -{currentWorkout.exercises[activeStep].difficulty[0].toUpperCase() + currentWorkout.exercises[activeStep].difficulty.slice(1)} <br />
                                                    -{currentWorkout.exercises[activeStep].muscle[0].toUpperCase() + currentWorkout.exercises[activeStep].muscle.slice(1)} <br />
                                                    -{currentWorkout.exercises[activeStep].equipment[0].toUpperCase() + currentWorkout.exercises[activeStep].equipment.slice(1)} <br />
                                                </Typography>
                                            </Box>
                                        </Box>
                                        
                                        <br />

                                        <Typography>
                                            {currentWorkout.exercises[activeStep].instructions}
                                        </Typography>
                                    </>
                                    }
                                </Box>


                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={stepFunctions.handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Previous
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={stepFunctions.handleNext} sx={{ mr: 1 }}>
                                        Next
                                    </Button>
                                    {steps && activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                Step {activeStep + 1} already completed
                                            </Typography>
                                        ) : (
                                            <Button onClick={stepFunctions.handleComplete}>
                                                {stepFunctions.completedSteps() === stepFunctions.totalSteps() - 1
                                                    ? 'Finish'
                                                    : 'Complete Exercise'}
                                            </Button>
                                        ))}
                                </Box>
                            </>
                        )}
                    </div>
                </Box>

                <Button 
                    variant="contained"
                    onClick={() => {navigate("/workouts")}}
                >
                    Back to Overview
                </Button>


            </Box>
        </>
    )
}