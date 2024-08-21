import ExerciseForm from './ExerciseForm';
import axios from 'axios';
import { BACKEND_API } from '../config/api';

function CreateExerciseForm({ onSuccess }) {
    const handleCreate = (exercise) => {
        axios.post(`${BACKEND_API}/exercises`, exercise)
            .then(response => {
                console.log('Exercise created:', response.data);
                if (onSuccess) onSuccess();
            })
            .catch(error => {
                console.error('Error creating exercise:', error);
            });
    };

    return (
        <ExerciseForm
            exercise={{}}
            onSubmit={handleCreate}
        />
    );
}

export default CreateExerciseForm;
