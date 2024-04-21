import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import Aboutpic from './images/about.jpg'
import '../App.css'
const About = () => {
    return (
        <div>
            <div className='about'>
                <Grid container direction="row" alignItems="center">
                    <Grid container item xs={12} sm={6} justifyContent="center" order={{ xs: 2, sm: 1 }} >
                        <Box component="img" src={Aboutpic} sx={{ width: '500px', borderRadius: '30px 100px' }} />
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                        <Typography variant="h3" fontFamily={"Dancing Script"} sx={{ padding: '10px', textAlign: 'center' }} color={'#BDB76B'}>Crafting Moments of Sweetness</Typography>
                        <Typography variant="h4" fontFamily={"Dancing Script"} sx={{ padding: '10px', textAlign: 'center' }} color={'#BDB76B'}>Our Story</Typography>
                        <Typography variant="h6" fontFamily={"Dancing Script"} sx={{ padding: '10px', textAlign: 'center' }} color={'#BDB76B'}>At Scoops & Smiles, we believe in the power of ice cream to create moments of joy and connection. Our journey began with a simple mission: to craft the finest handcrafted ice creams using only the highest quality ingredients and time-honored recipes. 
                        From classic flavors that evoke nostalgia to innovative creations that push the boundaries of taste, 
                        each scoop is a labor of love, meticulously crafted to delight your senses. Join us on our sweet journey 
                        and experience the magic of Scoops & Smiles today!</Typography>

                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default About
