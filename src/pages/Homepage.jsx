import { useState } from 'react';
import AddWorkout from '../components/AddWorkout';
import CreateExerciseDialog from '../components/CreateExerciseDialog';
import { Box, Typography, Container, Button } from '@mui/material';

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

            <AddWorkout />

            <CreateExerciseDialog 
                open={openDialog} 
                onClose={handleCloseDialog} 
            />
        </Container>
    );
}

export default Homepage;
