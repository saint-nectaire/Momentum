import { Container } from '@mui/material';
import PageHeader from '../components/PageHeader';

function Aboutpage() {
    return (
        <Container component="main">
            <PageHeader
                title="About The Project"
                subtitle="Learn more about what this project is all about."
            />
        </Container>
    );
}

export default Aboutpage;
