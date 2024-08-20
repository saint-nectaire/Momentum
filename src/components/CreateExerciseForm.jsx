import { useState } from "react";
import axios from 'axios';
import { Box, TextField, Button } from '@mui/material';
import { BACKEND_API } from '../config/api';
import { typeValueOptions, muscleValueOptions, difficultyValueOptions } from '../utils/utils';
import InputField from "./InputField";

function CreateExerciseForm() {
    const [exercise, setExercise] = useState({
        name: '',
        type: '',
        muscle: '',
        equipment: '',
        difficulty: '',
        instructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExercise(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(BACKEND_API + '/exercises', exercise)
            .then(response => {
                console.log('Exercise created:', response.data);
            })
            .catch(error => {
                console.error('Error creating exercise:', error);
            });
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={exercise.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <InputField
                type="select"
                label="Type"
                name="type"
                value={exercise.type}
                onChange={handleChange}
                options={typeValueOptions}
                required
            />
            <InputField
                type="select"
                label="Muscle"
                name="muscle"
                value={exercise.muscle}
                onChange={handleChange}
                options={muscleValueOptions}
                required
            />
            <TextField
                label="Equipment"
                name="equipment"
                value={exercise.equipment}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <InputField
                type="select"
                label="Difficulty"
                name="difficulty"
                value={exercise.difficulty}
                onChange={handleChange}
                options={difficultyValueOptions}
                required
            />
            <TextField
                label="Instructions"
                name="instructions"
                value={exercise.instructions}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained"  sx={{ mt: 2 }}>
                Create Exercise
            </Button>
        </Box>
    );
}

export default CreateExerciseForm;
