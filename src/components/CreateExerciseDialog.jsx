import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreateExerciseForm from './CreateExerciseForm';

function CreateExerciseDialog(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
        >
            <IconButton
                edge="end"
                color="inherit"
                onClick={props.onClose}
                aria-label="close"
                sx={{ position: 'absolute', right: 8, top: 8 }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <CreateExerciseForm />
            </DialogContent>
        </Dialog>
    );
}

export default CreateExerciseDialog;
