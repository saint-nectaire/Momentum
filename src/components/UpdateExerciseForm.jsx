import ExerciseForm from './ExerciseForm';
import { updateExercise } from '../services/exerciseService';

function UpdateExerciseForm({ exercise, onSuccess }) {
    const handleUpdate = async (updatedExercise) => {
        try {
            await updateExercise(updatedExercise.id, updatedExercise);
            if (onSuccess) onSuccess();
        } catch (error) {
            // need to change to a more use friendly error handling
            console.error('Error creating exercise:', error);
        }
    };

    return (
        <ExerciseForm
            exercise={exercise}
            onSubmit={handleUpdate}
        />
    );
}

export default UpdateExerciseForm;
