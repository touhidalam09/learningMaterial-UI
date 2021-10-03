import { Delete } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { deepOrange } from '@mui/material/colors';

const useStyles = makeStyles({
    cardBrCl: {
        border: (notes) => {
            if (notes.skill === 'JavaScript') {
                return '1px solid green'
            }
        }
    },
    avatarColor: {

        backgroundColor: (notes) => {
            if(notes.skill === 'Node JS'){
                return deepOrange[300]
            }
            if(notes.skill === 'React JS'){
                return deepOrange[600]
            }
            if(notes.skill === 'Java'){
                return deepOrange[100]
            }
            if(notes.skill === 'JavaScript'){
                return deepOrange[900]
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
                    <Avatar className={classes.avatarColor}>{note.skill[0].toUpperCase()}</Avatar>
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
