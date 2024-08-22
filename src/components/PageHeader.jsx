import { Box, Typography } from '@mui/material';

function PageHeader(props) {
    return (
        <Box sx={{ textAlign: 'center', mb: 4, pt: 2 }}>
            <Typography variant="h5">
                {props.title}
            </Typography>
            <Typography variant="subtitle1">
                {props.subtitle}
            </Typography>
        </Box>
    );
};

export default PageHeader;
