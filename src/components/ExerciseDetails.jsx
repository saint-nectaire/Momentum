import { Box, Typography, Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ExerciseDetails(props) {
    if (!props.exercise) return null;


    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    {props.exercise.name}
                </Typography>
                <IconButton onClick={props.onEdit} color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => props.onDelete(props.exercise.id)} color="secondary">
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Type: {props.exercise.type}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Muscle: {props.exercise.muscle}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Equipment: {props.exercise.equipment}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Difficulty: {props.exercise.difficulty}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Instructions:
            </Typography>
            <Typography paragraph>
                {props.exercise.instructions}
            </Typography>
            <Divider />
        </Box>
    );
};

export default ExerciseDetails;
