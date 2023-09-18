import React from 'react';
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.jsx';
// import MobileNavBar from '../components/MobileNavBar.jsx';
import Header from '../components/header.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Bio from '../components/Bio.jsx'
import Work from '../components/Work.jsx'
import ProgramEquity from '../components/ProgramEquity.jsx'


import './index.css'
// import MobileNavBar from '../components/MobileNavBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <MobileNavBar /> */}
    <Header />
    <Hero />
      <Bio />
      <Work />
      <App />
      <ProgramEquity />
    <Footer/>
    </StyledEngineProvider>
  </React.StrictMode>,
)
