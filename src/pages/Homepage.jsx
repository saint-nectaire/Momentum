import { Container, Box } from '@mui/material';
import PageHeader from '../components/PageHeader';
import HomeCard from '../components/HomeCard';
import workoutImg from '../assets/workout1.jpg';
import exerciseImg from '../assets/exercise1.jpg';

function Homepage() {
    return (
        <Container component="main">
            <PageHeader
                title="Welcome to Your Workout Tracker"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignContent: 'center'}}>
                <HomeCard
                    image={workoutImg}
                    title="Add and manage your workouts."
                    linkTo="/workouts"
                />
                <HomeCard
                    image={exerciseImg}
                    title="Add and manage your custom exercises."
                    linkTo="/exercises"
                />
            </Box>
        </Container>
    );
}

export default Homepage;
