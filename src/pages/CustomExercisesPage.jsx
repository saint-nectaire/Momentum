import { useEffect, useState } from "react";
import { Container, Button, List } from '@mui/material';
import { getExercises, deleteExercise } from '../services/exerciseService';
import CreateExerciseForm from '../components/CreateExerciseForm';
import UpdateExerciseForm from '../components/UpdateExerciseForm';
import CreateDialog from '../components/CreateDialog';
import PageHeader from '../components/PageHeader';
import ExerciseDetails from '../components/ExerciseDetails';
import ExerciseListItem from '../components/ExerciseListItem';
import ErrorSnackbar from '../components/ErrorSnackbar';

function CustomExercisesPage() {
    const [exercises, setExercises] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);

    async function getExercisesData() {
        try {
            const fetchedExercises = await getExercises();
            setExercises(fetchedExercises);
            if (selectedExercise) {
                setSelectedExercise(fetchedExercises.find(ex => ex.id === selectedExercise.id));
            }
        } catch {
            handleError('Failed to load exercises. Please try again later.');
        }
    }

    useEffect(() => {
        getExercisesData();
    },[]);

    const handleOpenDialog = (exercise = null, isCreating = false) => {
        setSelectedExercise(exercise);
        setIsCreating(isCreating);
        setIsEditing(false);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleCreateSuccess = () => {
        handleCloseDialog();
        getExercisesData()
    };

    const handleUpdateSuccess = () => {
        getExercisesData()
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteExercise(id);
            setOpenDialog(false);
        } catch {
            handleError('Failed to delete exercise. Please try again later.');
        }
    };

    const handleCloseSnackbar = () => {
        setError(null);
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
    }

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
                title={isCreating ? "Create New Exercise" : isEditing ? "Edit Exercise" : "Exercise Details"}
            >
                {isCreating ? (
                    <CreateExerciseForm onSuccess={handleCreateSuccess} onError={handleError}/>
                ) : isEditing && selectedExercise ? (
                    <UpdateExerciseForm 
                        exercise={selectedExercise} 
                        onSuccess={handleUpdateSuccess} 
                        onError={handleError}
                    />
                ) : (
                    <ExerciseDetails 
                        exercise={selectedExercise} 
                        onEdit={handleEdit} 
                        onDelete={handleDelete}
                    />
                )}
            </CreateDialog>
            <List>
                {exercises && exercises.map((exercise, index) => (
                    <ExerciseListItem
                        key={index}
                        exercise={exercise}
                        onClick={(selected) => handleOpenDialog(selected, false)}
                        onDelete={handleDelete} 
                    />
                ))}
            </List>
            <ErrorSnackbar error={error} onClose={handleCloseSnackbar} />
        </Container>
    );
}

export default CustomExercisesPage;
