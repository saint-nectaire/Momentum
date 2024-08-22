import { Box, Button } from '@mui/material';
import InputField from "./InputField";
import { buttonContainer } from "../styles/styles";
import { typeValueOptions, muscleValueOptions, difficultyValueOptions } from '../utils/utils';

function ExercisesFilter({
    muscle,
    type,
    difficulty,
    handleFilterChange,
    resetFilters
}) {
    
    return (
        <Box sx={buttonContainer}>
            <InputField
                label="Muscle"
                name="muscle"
                value={muscle}
                onChange={handleFilterChange}
                options={muscleValueOptions}
            />
            <InputField
                label="Exercise Type"
                name="type"
                value={type}
                onChange={handleFilterChange}
                options={typeValueOptions}
            />
            <InputField
                label="Difficulty"
                name="difficulty"
                value={difficulty}
                onChange={handleFilterChange}
                options={difficultyValueOptions}
            />
            <Button
                onClick={resetFilters}
                variant="contained" 
                sx={{ margin: 2 }}
            >
                Reset
            </Button>
        </Box>
    );
};

export default ExercisesFilter;
