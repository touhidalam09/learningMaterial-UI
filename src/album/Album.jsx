import { PhotoCamera } from '@mui/icons-material'
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react';
import useStyles from './Styles';



function Album() {
    const classes = useStyles();
    const cardSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <>
            {/* AppBar  */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6" >Album</Typography>
                </Toolbar>
            </AppBar>
            {/* Main body  */}
            <main>
                {/* Header section  */}
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
                        <Typography variant="h6" align="center" color="textSecondary" gutterBottom paragraph>
                            This is the photo album description paragrab somet hing to wite here to vies like a paragram content for this site
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item> <Button variant="contained" color="primary">See more Photo</Button></Grid>
                                <Grid item> <Button variant="outlined" color="secondary">See more Action</Button></Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                {/* Card grid  */}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                       { cardSize.map((cardItem) => (
                        <Grid item key={cardItem} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    title="Image Title"
                                    image="https://source.upslash.com/random"
                                />
                                <CardContent className={classes.cardContainer}>
                                    <Typography variant="h5" gutterBottom>
                                        Header
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                        This is th card subtitllersd fadds daf  ddaf
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))
                       }
                    </Grid>
                </Container>
            </main>

        </>
    )
}

export default Album
