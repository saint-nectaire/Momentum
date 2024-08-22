import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeCard({ image, title, linkTo }) {
    return (
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <Card>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    height="250"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

export default HomeCard;
