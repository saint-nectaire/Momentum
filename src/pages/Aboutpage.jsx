import { Container, Typography, Box } from '@mui/material';
import PageHeader from '../components/PageHeader';
import ProfileCard from '../components/ProfileCard';
import samImage from '../assets/sam.png';
import casperImage from '../assets/casper.jpeg';

function Aboutpage() {
    return (
        <Container component="main" sx={{ py: 4 }}>
            <PageHeader
                title="About The Project"
                subtitle="Learn more about your personal fitness tracker!"
            />

            <Box sx={{ mt: 4 }}>
                <Typography paragraph>
                    Momentum is a comprehensive fitness tracking application designed to help you manage and track your workouts efficiently. With Momentum, you can:
                </Typography>
                <ul>
                    <li><Typography paragraph>Add and track your workouts with ease.</Typography></li>
                    <li><Typography paragraph>Create and save custom exercises tailored to your fitness needs.</Typography></li>
                </ul>
                <Typography paragraph>
                    Our goal is to provide a user-friendly experience that motivates you to stay fit and achieve your fitness goals.
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center'}} gutterBottom>
                    Contributing to the Project:
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                    <ProfileCard image={samImage} name="Sam Alaoui" github="https://github.com/samalaou" />
                    <ProfileCard image={casperImage} name="Casper Van Rossum" github="https://github.com/Casperavr" />
                </Box>
            </Box>

        </Container>
    );
}

export default Aboutpage;
