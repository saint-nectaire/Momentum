import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreateExerciseForm from './CreateExerciseForm';

function CreateExerciseDialog(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>
                Create a New Exercise
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={props.onClose}
                    aria-label="close"
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <CreateExerciseForm />
            </DialogContent>
        </Dialog>
    );
}

export default CreateExerciseDialog;
