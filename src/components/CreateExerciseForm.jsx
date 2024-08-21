import ExerciseForm from './ExerciseForm';
import { createExercise } from '../services/exerciseService';

function CreateExerciseForm(props) {
    const handleCreate = async (exercise) => {
        try {
            const response = await createExercise(exercise);
            console.log('Exercise created:', response);
            if (props.onSuccess) props.onSuccess();
        } catch {
            props.onError('Failed to create exercise');
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
