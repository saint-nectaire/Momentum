import { ListItemButton, ListItemIcon, ListItemText, Avatar, Divider } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function ExerciseListItem(props) {
    return (
        <div>
            <ListItemButton
                onClick={() => props.onClick(props.exercise)}
                style={{ marginBottom: '8px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
                <ListItemIcon>
                    <Avatar>
                        <FitnessCenterIcon />
                    </Avatar>
                </ListItemIcon>
                <ListItemText 
                    primary={props.exercise.name || 'Unnamed Exercise'} 
                    secondary={props.exercise.description || 'No description available'}
                />
            </ListItemButton>
            <Divider />
        </div>
    );
};

export default ExerciseListItem;
