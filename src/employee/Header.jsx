import { AppBar, Badge, FormControl, Grid, IconButton, InputBase, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Header = () => {
    return (
        <>
            <Toolbar>
                <Grid container>
                    <Grid item >
                        <InputBase />
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={3}>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} >
                                <MailOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
};

export default Header;