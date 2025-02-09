import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Pricing from "./components/Pricing"
import WorkoutSessions from "./components/WorkoutSessions"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import BmiCalculator from "./components/BmiCalculator"
import Footer from "./components/Footer"




const App = () => {
  return (
    <Router>
     
      <Navbar />

     
      <Header />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BmiCalculator />
      <Footer />
      <ToastContainer theme='dark ' position='top-center' />
      
      
    </ Router>
  )
}

export default App
