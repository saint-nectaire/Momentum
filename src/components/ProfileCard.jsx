import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

function ProfileCard({ image, name, github }) {
  return (
    <Card sx={{ textAlign: 'center', maxWidth: 250 }}>
      <CardActionArea component="a" href={github} target="_blank" rel="noopener">
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ bgcolor: 'primary.contrastText' }}
        />
        <CardContent>
          <Typography variant="h6" >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileCard;
