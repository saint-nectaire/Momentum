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
import ExercisesFilter from '../components/ExercisesFilter';
import { createQueryParams } from '../utils/utils';


function CustomExercisesPage() {
    const [exercises, setExercises] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [filterOptions, setFilterOptions] = useState({
        muscle: '',
        type: '',
        difficulty: ''
    });

    const fetchExercises = async () => {
        const queryParams = createQueryParams(filterOptions);
        try {
            const fetchedExercises = await getExercises(queryParams);
            setExercises(fetchedExercises);
            if (selectedExercise) {
                setSelectedExercise(fetchedExercises.find(ex => ex.id === selectedExercise.id));
            }
        } catch {
            handleError('Failed to load exercises. Please try again later.');
        }
    };

    useEffect(() => {
        fetchExercises();
    }, [filterOptions]);

    const handleOpenDialog = (exercise = null, isCreating = false) => {
        setSelectedExercise(exercise);
        setIsCreating(isCreating);
        setIsEditing(false);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSuccess = () => {
        handleCloseDialog();
        fetchExercises();
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteExercise(id);
            handleCloseDialog();
            fetchExercises();
        } catch {
            handleError('Failed to delete exercise. Please try again later.');
        }
    };

    const handleCloseSnackbar = () => {
        setError(null);
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterOptions(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilterOptions({
            muscle: '',
            type: '',
            difficulty: ''
        });
    };

    return (
        <Container component="main">
            <PageHeader
                title="Exercises"
                subtitle="Add and manage your custom exercises."
            />
            <ExercisesFilter
                muscle={filterOptions.muscle}
                type={filterOptions.type}
                difficulty={filterOptions.difficulty}
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
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
                    <CreateExerciseForm onSuccess={handleSuccess} onError={handleError}/>
                ) : isEditing && selectedExercise ? (
                    <UpdateExerciseForm 
                        exercise={selectedExercise} 
                        onSuccess={handleSuccess} 
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
                {exercises.map((exercise) => (
                    <ExerciseListItem
                        key={exercise.id}
                        exercise={exercise}
                        onClick={() => handleOpenDialog(exercise, false)}
                        onDelete={handleDelete} 
                    />
                ))}
            </List>
            <ErrorSnackbar error={error} onClose={handleCloseSnackbar} />
        </Container>
    );
}

export default CustomExercisesPage;
