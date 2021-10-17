import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useStyles from './empStyle';

const initValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: "Male",
    departmentId: '',
    hireDate: new Date(),
    isPermanet: false
};

function EmployeeForm() {
    const classes = useStyles();
    const [values, setValues] = useState(initValues)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={classes.formRoot}
            >
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            label="Fullname"
                            required
                            name="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="sample@mail.com"
                            type="email"
                            required
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Mobile"
                            type="number"
                            required
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="City"
                            required
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender"
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default EmployeeForm;