import ExerciseForm from './ExerciseForm';
import { updateExercise } from '../services/exerciseService';

function UpdateExerciseForm(props) {
    const handleUpdate = async (updatedExercise) => {
        try {
            await updateExercise(updatedExercise.id, updatedExercise);
            if (props.onSuccess) props.onSuccess();
        } catch {
            props.onError('Failed to update exercise')
        }
    };

    return (
        <ExerciseForm
            exercise={props.exercise}
            onSubmit={handleUpdate}
        />
    );
}

export default UpdateExerciseForm;
