import { Delete } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    cardBrCl: {
        border: (notes) => {
            if (notes.skill === 'JavaScript') {
                return '1px solid green'
            }
        }
    }
})

function NoteCard({ note, handleDeleteCard }) {
    const classes = useStyles(note)
    return (
        <Card
            elevation={2}
            className={classes.cardBrCl}
        >
            <CardHeader
                avatar={
                    <Avatar>{note.skill[0].toUpperCase()}</Avatar>
                }
                action={
                    <IconButton aria-label="delete" onClick={() => handleDeleteCard(note.id)}>
                        <Delete />
                    </IconButton>
                }
                title={note.title}
                subheader={note.skill}
            >
            </CardHeader>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard
