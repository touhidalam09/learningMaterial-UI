import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import useStyles from './blogStyle'

const FeatureCard = () => {

    const classes = useStyles();

    return (
        <>
            <Container>
                <Card className={classes.cardFeauture}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Lorem ipsum dolor sit amet.</Typography>

                        <Typography variant="subtitle2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, eveniet.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.cardFeautureBtn}>
                            read me ...
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
};

export default FeatureCard;