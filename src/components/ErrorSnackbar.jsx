import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorSnackbar = (props) => {
  return (
    <Snackbar
      open={!!props.error}
      autoHideDuration={6000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={props.onClose} severity="error">
        {props.error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
