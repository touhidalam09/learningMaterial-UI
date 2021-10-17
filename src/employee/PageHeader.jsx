import { Card, Paper, Typography } from '@mui/material';
import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box } from '@mui/system';
import useStyles from './empStyle';

const PageHeader = () => {
    const classes = useStyles()

    return (
        <>
            <Paper elevation={0} square>
                <Box
                    component="div"
                    className={classes.pageHeader}
                >
                    <Card className={classes.pageIcon}>
                        <PeopleAltIcon />
                    </Card>
                    <Box
                        component="div"
                        className={classes.pageContent}
                    >
                        <Typography variant="h6">
                            Lorem, ipsum dolor.
                        </Typography>
                        <Typography variant="subtitle2">
                            Lorem ipsum dolor sit amet.
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </>
    );
};

export default PageHeader;