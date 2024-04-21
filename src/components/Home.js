import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
import Icecream from './images/home.png'
import CallIcon from '@mui/icons-material/Call';
import '../App.css'

const Home = () => {
    return (
        <div className='home'>
        <Grid container direction="row" alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography variant="h3" fontFamily={"Dancing Script"} sx={{padding:'10px' , textAlign:'center'}} color={'#855E42'}>Welcome to Scoops & Smiles!</Typography>
                <Typography variant="h4" fontFamily={"Dancing Script"} sx={{padding:'10px' , textAlign:'center'}} color={'#855E42'}>Indulge in Joyful Scoops</Typography>
                <Typography variant="h5" fontFamily={"Dancing Script"} sx={{padding:'10px' , textAlign:'center'}} color={'#855E42'}>At Scoops & Smiles, we're all about crafting moments of pure delight. Dive into our array of handcrafted ice creams, each scoop bursting with flavor and happiness. Join us for a scoop of joy today!</Typography>

                <Button size="large" variant="contained" startIcon={<CallIcon />}>
                  Call us
               </Button>
            </Grid>
            <Grid container item xs={12} sm={6} justifyContent="center" order={{ xs: 1, sm: 2 }}>
                <Box component="img" src={Icecream} />
            </Grid>
        </Grid>
        </div>
    )
}

export default Home
