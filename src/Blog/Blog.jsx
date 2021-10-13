import { Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import useStyles from './blogStyle'
import FeatureCard from './FeatureCard';
import Footer from './Footer';
import CardGrid from './CardGrid';

function Blog() {
    const classes = useStyles();

    return (
        <Container className={classes.blogContainer}>
            <Header />
            <FeatureCard />
            <br />
            <CardGrid />
            <br />
            <Footer />
        </Container>
    )
}

export default Blog
