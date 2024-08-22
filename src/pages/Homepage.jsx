import { Container } from '@mui/material';
import PageHeader from '../components/PageHeader';

function Homepage() {
    return (
        <Container component="main">
            <PageHeader
                title="Welcome to Your Workout Tracker"
                subtitle="Add and manage your workouts."
            />


        </Container>
    );
}

export default Homepage;
