import { Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import useStyles from './empStyle';

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Toolbar className={classes.empToolbar}>
                <Grid container >
                    <Grid item className={classes.serachGrid} >
                        <InputBase
                            className={classes.sercahInput}
                            placeholder="Search topics"
                            startAdornment={<SearchIcon fontSize="small" />} />
                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <NotificationsNoneIcon fontSize="small" color="secondary" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary" >
                                <MailOutlineIcon fontSize="small" color="secondary" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
};

export default Header;