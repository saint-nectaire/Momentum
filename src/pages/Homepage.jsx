import { Container } from '@mui/material';
import PageHeader from '../components/PageHeader';
import AddWorkout from '../components/AddWorkout';
import WorkoutOverview from '../components/WorkoutOverview';

function Homepage() {
    return (
        <Container component="main">
            <PageHeader
                title="Welcome to Your Workout Tracker"
                subtitle="Add and manage your workouts."
            />

            <WorkoutOverview />
            <AddWorkout />
            

        </Container>
    );
}

export default Homepage;
