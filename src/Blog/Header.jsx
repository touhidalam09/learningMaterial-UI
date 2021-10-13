import React from 'react';
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import useStyles from './blogStyle'

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
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
