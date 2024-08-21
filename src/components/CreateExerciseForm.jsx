import ExerciseForm from './ExerciseForm';
import { createExercise } from '../services/exerciseService';

function CreateExerciseForm({ onSuccess }) {
    const handleCreate = async (exercise) => {
        try {
            const response = await createExercise(exercise);
            console.log('Exercise created:', response);
            if (onSuccess) onSuccess();
        } catch (error) {
            // need to change to a more use friendly error handling
            console.error('Error creating exercise:', error);
        }
    };

    return (
        <ExerciseForm
            exercise={{
                name: '',
                type: '',
                muscle: '',
                equipment: '',
                difficulty: '',
                instructions: ''
            }}
            onSubmit={handleCreate}
        />
    );
}

export default CreateExerciseForm;
