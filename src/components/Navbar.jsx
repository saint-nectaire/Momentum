import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import logo from '../assets/logo.png';
import { logoStyles, toolBarStyles } from '../styles/styles'

function Navbar() {
    return (
      <AppBar position="sticky">
        <Toolbar sx={toolBarStyles}>
          <IconButton edge="start" component={Link} to="/">
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={logoStyles}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

export default Navbar;
