import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, List, ListItem, Button, ListItemText} from '@mui/material';
import { BACKEND_API } from "../config/api";
import CreateExerciseForm from '../components/CreateExerciseForm';
import CreateDialog from '../components/CreateDialog';

function CustomExercisesPage() {
    const [exercises, setExercises] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        axios.get(`${BACKEND_API}/exercises`)
            .then(response => {
                setExercises(response.data);
            })
            .catch(error => {
                console.error('Error getting exercises:', error);
            });
    }, []);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Container component="main">
            <Typography variant="h1" gutterBottom>
                Exercises
            </Typography>
            <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleOpenDialog} 
                    sx={{ mt: 2 }}
                >
                    Create New Exercise
                </Button>
                <CreateDialog
                open={openDialog}
                onClose={handleCloseDialog}
                title="Create New Exercise"
            >
                <CreateExerciseForm />
            </CreateDialog>
            <List>
                {exercises && exercises.map((exercise, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={exercise.name || exercise} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default CustomExercisesPage;
