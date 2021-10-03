import {  Container, Grid, } from '@mui/material'
import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard'


function Notes() {
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
    }


    return (
        <Container maxWidth="xl">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    notes.map(note => (
                        <Grid item xs={12} sm={6} md={3} key={note.id}>
                            <NoteCard note={note} handleDeleteCard={handleDeleteCard} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Notes
