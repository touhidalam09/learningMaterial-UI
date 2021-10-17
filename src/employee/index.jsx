import { Container, Paper } from '@mui/material';
import React from 'react';
import EmployeeForm from './EmployeeForm';
import useStyles from './empStyle';
import Header from './Header';
import PageHeader from './PageHeader';



const IndexEmployee = () => {
const classes = useStyles()

    return (
        <div className={classes.rootBg}>
            <Header />
            <PageHeader />
            <Container>
                <Paper 
                elevation={0}
                className={classes.employeePaper}>
                <EmployeeForm />
                </Paper>
            </Container>
        </div>
    );
};

export default IndexEmployee;