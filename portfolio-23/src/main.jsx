import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from '../components/header.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Bio from '../components/Bio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Bio />
    <App />
    <Footer/>
  </React.StrictMode>,
)
