import { Typography } from '@mui/material'
import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#855E42',
    },
  },
});


const App = () => {
  return (
    <div className='main'>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App

