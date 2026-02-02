import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Partners from '../components/Partners'
import Benefits from '../components/Benefits'
import Merchant from '../components/Merchant'
import Enterprise from '../components/Entreprise'
import Testimonials from '../components/Testimonials'
import Security from '../components/Security.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Home() {
  return (
    <div>
        <Hero/>
        <HowItWorks/>
        <Benefits/>
        <Partners/>
        <Merchant/>
        <Enterprise/>
        <Testimonials/>
        <Security/>
        <FAQ/>
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent