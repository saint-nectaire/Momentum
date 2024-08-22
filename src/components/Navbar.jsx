import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { toolBarStyles } from '../styles/styles';

function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar sx={toolBarStyles}>
                <IconButton edge="start" component={Link} to="/" sx={{ p: 0 }}>
                    <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Momentum
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
