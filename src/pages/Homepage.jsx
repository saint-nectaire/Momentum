import AddWorkout from '../components/AddWorkout';
import WorkoutDetailsPage from './WorkoutDetailsPage'
import { Box, Typography, Container } from '@mui/material';

function Homepage() {
    return (
        <Container component="main">
            <Box sx={{ textAlign: 'center', mb: 4, pt: 2 }}>
                <Typography variant="h4" >
                    Welcome to Your Workout Tracker
                </Typography>
                <Typography variant="subtitle1">
                    Add and manage your workouts.
                </Typography>
            </Box>

            <WorkoutDetailsPage />
            <AddWorkout></AddWorkout>
        </Container>
    );
}

export default Homepage;
