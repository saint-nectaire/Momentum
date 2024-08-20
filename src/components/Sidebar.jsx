import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={true}
            PaperProps={{
                sx: { width: "10%" },
              }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <HomeIcon sx={{ mr: 2 }} />
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/about">
                        <InfoIcon sx={{ mr: 2 }} />
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
