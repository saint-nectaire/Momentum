import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
}

export default ErrorPage;
