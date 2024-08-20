import AddWorkout from '../components/AddWorkout';
import { Box, Typography, Container } from '@mui/material';
import WorkoutOverview from '../components/WorkoutOverview';

function Homepage() {
    return (
        <Container component="main">
            <Box sx={{ textAlign: 'center', mb: 4, pt: 2 }}>
                <Typography variant="h4">
                    Welcome to Your Workout Tracker
                </Typography>
                <Typography variant="subtitle1">
                    Add and manage your workouts.
                </Typography>
            </Box>

            <WorkoutOverview />
            <AddWorkout />
            
        </Container>
    );
}

export default Homepage;
