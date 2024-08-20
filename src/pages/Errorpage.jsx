import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import PageHeader from '../components/PageHeader';

function ErrorPage() {
    return (
        <Container component="main" sx={{ textAlign: 'center' }}>
            <PageHeader
                title="404 - Page Not Found"
                subtitle="Oops! The page you're looking for doesn't exist or has been moved."
            />
            <Link to="/">Go to Homepage</Link>
        </Container>
    );
}

export default ErrorPage;
