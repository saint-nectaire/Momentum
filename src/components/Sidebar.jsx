import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; 
import { iconStyle } from '../styles/styles'

const Sidebar = () => {
    const menuItems = [
        {
            text: 'Home',
            icon: <HomeIcon sx={iconStyle} />,
            path: '/'
        },
        {
            text: 'Exercises',
            icon: <FitnessCenterIcon sx={iconStyle} />,
            path: '/exercises'
        },
        {
            text: 'About',
            icon: <InfoIcon sx={iconStyle} />,
            path: '/about'
        }
    ];

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
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            {item.icon}
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
