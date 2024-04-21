import React from 'react'
import { Typography, Box } from '@mui/material'

const Footer = () => {
  return (
    <>
       <Box 
      sx={{
        width: '100%',
        padding: '20px',
        bgcolor: 'primary.main',
        color: '#BDB76B',
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Scoops & Smiles
      </Typography>
      <Typography variant="body2">
        All rights reserved.|| Created By Rabiya Noor Ahmed
      </Typography>
    </Box>
    </>
  )
}

export default Footer
