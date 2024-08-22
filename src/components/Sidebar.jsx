import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { iconStyle } from '../styles/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:900px)');

    const toggleDrawer = (open) => () => {
        setIsOpen(open);
    };

    return (
        <>
            {isSmallScreen && (
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                variant={isSmallScreen ? "temporary" : "persistent"}
                anchor="left"
                open={isSmallScreen ? isOpen : true}
                onClose={toggleDrawer(false)}
            >
                <Box
                    onClick={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.path}>
                                    {item.icon}
                                    {!isMediumScreen && (
                                        <ListItemText primary={item.text} />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;
