import React, { useState } from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@material-ui/styles'
import { Button, Container, FormControl, FormLabel, Radio, TextField, Typography, FormControlLabel, RadioGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
    textField: {
        display: 'block',
        marginBottom: "20px"
    }
})

function Creact() {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [skill, setSkill] = useState('')
    const [skillError, setSkillError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)
        setSkillError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (skill === '') {
            setSkillError(true)
        }

        if (title && details && skill) {
            console.log(title, details, skill);
        }
    }
    return (
        <Container>
            <Typography variant="h4" color="textSecondary">Create a new note</Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.textField}>
                    <TextField
                        variant="outlined"
                        label="Title"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(e) => setTitle(e.target.value)}
                        error={titleError}
                    />
                    <TextField
                        variant="outlined"
                        label="Details"
                        required
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        onChange={(e) => setDetails(e.target.value)}
                        error={detailsError}
                    />
                </div>
                <div className={classes.textField}>
                    <FormControl error={skillError}>
                        <FormLabel>Choose your Skill</FormLabel>
                        <RadioGroup aria-label="skills" onChange={(e) => setSkill(e.target.value)}>
                            <FormControlLabel value="Java" label="Java" control={<Radio />} />
                            <FormControlLabel value="JavaScript" label="JavaScript" control={<Radio />} />
                            <FormControlLabel value="React JS" label="React JS" control={<Radio />} />
                            <FormControlLabel value="Node JS" label="Node JS" control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} >Submit</Button>
                </div>
            </Box>
        </Container>
    )
}

export default Creact
