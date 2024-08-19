import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function InputField(props) {
    return (
        <FormControl fullWidth margin="normal" required={props.required}>
        <InputLabel>{props.label}</InputLabel>
        <Select
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            {props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    );
}

export default InputField;
