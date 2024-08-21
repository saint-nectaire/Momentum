import ExerciseForm from './ExerciseForm';
import axios from 'axios';
import { BACKEND_API } from '../config/api';

function UpdateExerciseForm({ exercise, onSuccess }) {
    const handleUpdate = (updatedExercise) => {
        axios.put(`${BACKEND_API}/exercises/${updatedExercise.id}`, updatedExercise)
            .then(response => {
                console.log('Exercise updated:', response.data);
                if (onSuccess) onSuccess();
            })
            .catch(error => {
                console.error('Error updating exercise:', error);
            });
    };

    return (
        <ExerciseForm
            exercise={exercise}
            onSubmit={handleUpdate}
        />
    );
}

export default UpdateExerciseForm;
