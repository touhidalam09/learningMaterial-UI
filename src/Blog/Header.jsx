import React, { useState } from 'react';
import { Badge, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import useStyles from './blogStyle'
const drawerWidth = "240px";

const Header = () => {

    const classes = useStyles();

    const [state, setState] = useState(false);

    const menuItem = [
        {
            text: "Notes",
            icon: <MenuIcon />,
            path: "/"
        },
        {
            text: "Create",
            icon: <MenuIcon />,
            path: "/create"
        },
        {
            text: "Album Site",
            icon: <MenuIcon />,
            path: "/album"
        },
        {
            text: "Blog Site",
            icon: <MenuIcon />,
            path: "/blog"
        }
    ]

    const toggleDrawer = ( open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
        console.log("on clicked");
    };

    return (
        <>
            <Toolbar>
                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                    anchor="left"
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    <List>
                        {
                            menuItem.map(item => (
                                <ListItem button key={item.text} >
                                    <ListItemIcon> {item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            )
                            )
                        }
                    </List>
                </Drawer>

                <Typography
                    className={classes.brandTitle}
                    variant="h6">
                    Blog Site
                </Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <PeopleAltIcon />
                </IconButton>

            </Toolbar>
            <Divider />
            <Toolbar className={classes.tagTitleTolbr}>
                <Typography
                    className={classes.tagTitle}
                    variant="h5">
                    This is the Blog Site Hellow Message
                </Typography>
            </Toolbar>
        </>
    );
};

export default Header;
