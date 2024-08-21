import { ListItemButton, ListItemIcon, ListItemText, Avatar, Divider, IconButton, Box } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeleteIcon from '@mui/icons-material/Delete';

function ExerciseListItem(props) {
    return (
        <div>
            <ListItemButton
                onClick={() => props.onClick(props.exercise)}
            >
                <ListItemIcon>
                    <Avatar>
                        <FitnessCenterIcon />
                    </Avatar>
                </ListItemIcon>
                <ListItemText 
                    primary={props.exercise.name || 'Unnamed Exercise'} 
                    secondary={props.exercise.instructions || 'No instruction available'}
                />
                <Box>
                    <IconButton 
                        onClick={(e) => {
                            e.stopPropagation();
                            props.onDelete(props.exercise.id);
                        }} 
                        color="secondary"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </ListItemButton>
            <Divider />
        </div>
    );
}

export default ExerciseListItem;
