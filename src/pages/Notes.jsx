import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import {
    Container,
    Grid,
    IconButton,
    Snackbar,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard'
import MuiAlert from '@mui/material/Alert';

function Notes() {
    // Snackbar Start
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    // Snackbar END

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDeleteCard = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: "DELETE"
        })

        const newNote = notes.filter(note => note.id !== id)
        setNotes(newNote)
        // toast or alert show when delete button clicked
        setOpen(true)
    }


    return (
        <Container maxWidth="xl">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    notes.map(note => (
                        <Grid item xs={12} md={6} lg={3} key={note.id}>
                            <NoteCard note={note} handleDeleteCard={handleDeleteCard} />
                        </Grid>
                    ))
                }
            </Grid>
            <Snackbar
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                action={
                    <IconButton onClick={handleClose}>
                        <CloseRoundedIcon />
                    </IconButton>
                }
            >
                <MuiAlert
                    onClose={handleClose}
                    severity="warning">
                    delete note!!
                </MuiAlert>
            </Snackbar>
        </Container>
    )
}

export default Notes
