import { useState, useEffect } from "react";
import { Box, TextField, Button } from '@mui/material';
import InputField from "./InputField";
import { typeValueOptions, muscleValueOptions, difficultyValueOptions } from '../utils/utils';

function ExerciseForm(props) {
    const [currentExercise, setCurrentExercise] = useState(props.exercise);

    useEffect(() => {
        setCurrentExercise(props.exercise);
    }, [props.exercise]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentExercise(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(currentExercise);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={currentExercise.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <InputField
                type="select"
                label="Type"
                name="type"
                value={currentExercise.type}
                onChange={handleChange}
                options={typeValueOptions}
                required
            />
            <InputField
                type="select"
                label="Muscle"
                name="muscle"
                value={currentExercise.muscle}
                onChange={handleChange}
                options={muscleValueOptions}
                required
            />
            <TextField
                label="Equipment"
                name="equipment"
                value={currentExercise.equipment}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <InputField
                type="select"
                label="Difficulty"
                name="difficulty"
                value={currentExercise.difficulty}
                onChange={handleChange}
                options={difficultyValueOptions}
                required
            />
            <TextField
                label="Instructions"
                name="instructions"
                value={currentExercise.instructions}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                {props.exercise.id ? 'Update Exercise' : 'Create Exercise'}
            </Button>
        </Box>
    );
}

export default ExerciseForm;
