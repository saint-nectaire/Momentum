import { ListItemButton, ListItemIcon, ListItemText, Avatar, Divider, IconButton, Box } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsGymnastics from '@mui/icons-material/SportsGymnastics';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ElectricBolt from '@mui/icons-material/ElectricBolt';


const typeIconMapping = {
    cardio: <DirectionsRunIcon />,
    strength: <FitnessCenterIcon />,
    olympic_weightlifting: <EmojiEventsIcon />,
    plyometrics: <EmojiPeopleIcon />,
    powerlifting: <ElectricBolt />,
    stretching: <SportsGymnastics />,
    strongman: <FitnessCenterIcon />,
};


function ExerciseListItem(props) {
    const { exercise, onClick, onDelete } = props;
    const exerciseIcon = typeIconMapping[exercise.type] || <FitnessCenterIcon />;

    return (
        <div>
            <ListItemButton onClick={() => onClick(exercise)}>
                <ListItemIcon>
                    <Avatar>
                        {exerciseIcon}
                    </Avatar>
                </ListItemIcon>
                <ListItemText 
                    primary={exercise.name || 'Unnamed Exercise'} 
                    secondary={exercise.instructions || 'No instruction available'}
                />
                <Box>
                    <IconButton 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(exercise.id);
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
