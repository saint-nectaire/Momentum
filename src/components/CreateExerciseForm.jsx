import { useState } from "react";
import axios from 'axios';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';
import { FAKE_API } from '../config/api';

function CreateExerciseForm() {
    const [exercise, setExercise] = useState({
        name: '',
        type: '',
        muscle: [],
        equipment: '',
        difficulty: [],
        instructions: ''
    });

    const handleChange = (e) => {
        const { name, value, multiple } = e.target;
        setExercise(prevState => ({
            ...prevState,
            [name]: multiple ? Array.from(e.target.selectedOptions, option => option.value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(FAKE_API + '/exercises', exercise)
            .then(response => {
                console.log('Exercise created:', response.data);
                setExercise({
                    name: '',
                    type: '',
                    muscle: [],
                    equipment: '',
                    difficulty: [],
                    instructions: ''
                });
            })
            .catch(error => {
                console.error('Error creating exercise:', error);
            });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>Create a New Exercise</Typography>
            
            <TextField
                label="Name"
                name="name"
                value={exercise.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <FormControl fullWidth margin="normal" required>
                <InputLabel>Type</InputLabel>
                <Select
                    name="type"
                    value={exercise.type}
                    onChange={handleChange}
                >
                    <MenuItem value="cardio">Cardio</MenuItem>
                    <MenuItem value="strength">Strength</MenuItem>
                    <MenuItem value="olympic_weightlifting">Olympic Weightlifting</MenuItem>
                    <MenuItem value="plyometrics">Plyometrics</MenuItem>
                    <MenuItem value="powerlifting">Powerlifting</MenuItem>
                    <MenuItem value="stretching">Stretching</MenuItem>
                    <MenuItem value="strongman">Strongman</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
                <InputLabel>Muscle</InputLabel>
                <Select
                    name="muscle"
                    multiple
                    value={exercise.muscle}
                    onChange={handleChange}
                >
                    <MenuItem value="abdominals">Abdominals</MenuItem>
                    <MenuItem value="abductors">Abductors</MenuItem>
                    <MenuItem value="adductors">Adductors</MenuItem>
                    <MenuItem value="biceps">Biceps</MenuItem>
                    <MenuItem value="calves">Calves</MenuItem>
                    <MenuItem value="chest">Chest</MenuItem>
                    <MenuItem value="forearms">Forearms</MenuItem>
                    <MenuItem value="glutes">Glutes</MenuItem>
                    <MenuItem value="hamstrings">Hamstrings</MenuItem>
                    <MenuItem value="lats">Lats</MenuItem>
                    <MenuItem value="lower_back">Lower Back</MenuItem>
                    <MenuItem value="middle_back">Middle Back</MenuItem>
                    <MenuItem value="neck">Neck</MenuItem>
                    <MenuItem value="quadriceps">Quadriceps</MenuItem>
                    <MenuItem value="traps">Traps</MenuItem>
                    <MenuItem value="triceps">Triceps</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Equipment"
                name="equipment"
                value={exercise.equipment}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal" required>
                <InputLabel>Difficulty</InputLabel>
                <Select
                    name="difficulty"
                    multiple
                    value={exercise.difficulty}
                    onChange={handleChange}
                >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="expert">Expert</MenuItem>
                </Select>
            </FormControl>
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
            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
                Create Exercise
            </Button>
        </Box>
    );
}

export default CreateExerciseForm;
