import { Container, Typography } from '@mui/material';
import React from 'react';

import useStyles from './blogStyle'

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.footer}>
                <div>
                    <Typography variant="body1">About - MUI</Typography>
                    <Typography variant="subtitle2">Copy right Touhid Alam 2021</Typography>
                </div>
            </Container>
        </>
    );
};

export default Footer;