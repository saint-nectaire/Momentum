import { Box, Typography, Divider } from '@mui/material';

function ExerciseDetails({ exercise }) {
    if (!exercise) return null;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {exercise.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Type: {exercise.type}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Muscle: {exercise.muscle}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Equipment: {exercise.equipment}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Difficulty: {exercise.difficulty}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Instructions:
            </Typography>
            <Typography paragraph>
                {exercise.instructions}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </Box>
    );
};

export default ExerciseDetails;
