import { makeStyles } from '@material-ui/styles'
import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const useStyles = makeStyles({
    textField: {
        display: 'block',
        marginBottom: "20px"
    }
})

function Creact() {
    const classes = useStyles()
    return (
        <Container>
            <Typography variant="h4" color="textSecondary">Create a new note</Typography>
            <Box component="form" noValidate autoComplete="off">
                <div className={classes.textField}>
                    <TextField
                        variant="outlined"
                        label="Title"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        variant="outlined"
                        label="Details"
                        required
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <div>
                    <Button type="submit" variant="contained" >Submit</Button>
                </div>
            </Box>
        </Container>
    )
}

export default Creact
