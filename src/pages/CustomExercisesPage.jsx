import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, List } from '@mui/material';
import { BACKEND_API } from "../config/api";
import CreateExerciseForm from '../components/CreateExerciseForm';
import CreateDialog from '../components/CreateDialog';
import PageHeader from '../components/PageHeader';
import ExerciseDetails from '../components/ExerciseDetails';
import ExerciseListItem from '../components/ExerciseListItem';

function CustomExercisesPage() {
    const [exercises, setExercises] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    useEffect(() => {
        axios.get(`${BACKEND_API}/exercises`)
            .then(response => {
                setExercises(response.data);
            })
            .catch(error => {
                console.error('Error getting exercises:', error);
            });
    }, [refreshTrigger]);

    const handleOpenDialog = (exercise = null, isCreating = false) => {
        setSelectedExercise(exercise);
        setIsCreating(isCreating);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleCreateSuccess = () => {
        handleCloseDialog();
        setRefreshTrigger(prev => !prev); // Trigger data refresh
    };

    return (
        <Container component="main">
            <PageHeader
                title="Exercises"
                subtitle="Add and manage your custom exercises."
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleOpenDialog(null, true)}
                style={{ marginBottom: '16px' }}
            >
                Create New Exercise
            </Button>
            <CreateDialog
                open={openDialog}
                onClose={handleCloseDialog}
                title={isCreating ? "Create New Exercise" : "Exercise Details"}
            >
                {isCreating ? (
                    <CreateExerciseForm onSuccess={handleCreateSuccess} />
                ) : (
                    <ExerciseDetails exercise={selectedExercise} />
                )}
            </CreateDialog>
            <List>
                {exercises && exercises.map((exercise, index) => (
                    <ExerciseListItem
                        key={index}
                        exercise={exercise}
                        onClick={(selected) => handleOpenDialog(selected, false)}
                    />
                ))}
            </List>
        </Container>
    );
}

export default CustomExercisesPage;
