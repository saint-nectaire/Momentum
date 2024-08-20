import { Dialog, DialogContent, DialogTitle, IconButton, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { closeButton } from '../styles/styles'

function CreateDialog(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {props.title}
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={props.onClose}
                    aria-label="close"
                    sx={closeButton}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {props.children}
            </DialogContent>
            {props.actions && (
                <DialogActions>
                    {props.actions}
                </DialogActions>
            )}
        </Dialog>
    );
}

export default CreateDialog;
