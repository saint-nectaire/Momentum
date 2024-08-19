import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Paper } from "@mui/material";
import { paperStyles } from "../styles/styles";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




function AddWorkout() {
// workout is an array of exercises
  const [workout, setWorkout] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

    let data, filterMethod = "muscle", filterType = "biceps" 

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/exercises'+`?${filterMethod}=${filterType}`, {headers: { 'X-Api-Key': '/2l4M9V5VpBLETtKJzc5Mw==mPTtJXrI5qzXquuf' }})
        .then((response) => {
            data = response.data
            setWorkout([...workout, data[0]])
        })
        .catch((error) => {console.log(error)})
    }, [])

    const handleClickOpen = () => {
        setDialogOpen(true);
    }

    const handleClickClose = () => {
        setDialogOpen(false);
    }

    return ( 
        <>

            {workout && workout.map((exercise, i) => {
                return(
                    <div key={i}>
                        <Paper sx={paperStyles} elevation={10} square={false}>exercise {i+1}</Paper>
                    </div>
                )
            })} 

            <Paper sx={paperStyles} elevation={10} square={false}>
                add exercise
                <IconButton onClick={handleClickOpen} color='secondary'><AddIcon /></IconButton>
            </Paper>





            <Dialog
                onClose={handleClickClose}
                aria-labelledby="customized-dialog-title"
                open={dialogOpen}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClickClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClickClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>





        </>
    );
}


export default AddWorkout;