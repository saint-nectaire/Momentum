import { useState } from 'react';
import CreateExerciseForm from '../components/CreateExerciseForm';
import CreateDialog from '../components/CreateDialog';
import AddWorkout from '../components/AddWorkout';
import { Box, Typography, Container, Button } from '@mui/material';
import WorkoutOverview from '../components/WorkoutOverview';

function Homepage() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Container component="main">
            <Box sx={{ textAlign: 'center', mb: 4, pt: 2 }}>
                <Typography variant="h4">
                    Welcome to Your Workout Tracker
                </Typography>
                <Typography variant="subtitle1">
                    Add and manage your workouts.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleOpenDialog} 
                    sx={{ mt: 2 }}
                >
                    Create New Exercise
                </Button>
            </Box>

            <CreateDialog
                open={openDialog}
                onClose={handleCloseDialog}
                title="Create New Exercise"
            >
                <CreateExerciseForm />
            </CreateDialog>

            <WorkoutOverview />
            <AddWorkout />
            
        </Container>
    );
}

export default Homepage;
