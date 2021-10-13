import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useStyles from './blogStyle'

const CardGrid = () => {
    const classes = useStyles();
    
    const numberCardSize = [1, 2, 3];
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {
                        numberCardSize.map((cardItem) => (
                            <Grid key={cardItem} item xm={12} md={6}>
                                <Card className={classes.cardGrid}>
                                    <CardHeader
                                        title= {`Card Title `+ cardItem}
                                        subheader="Nov 12"
                                    />
                                    <CardContent>
                                        <Typography variant="body1" color="textSecondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, voluptate?</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button>Read more..</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    );
};

export default CardGrid;