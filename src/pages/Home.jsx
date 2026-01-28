import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Partners from '../components/Partners'

export default function Home() {
  return (
    <div>
        <Hero/>
        <HowItWorks/>
        <Partners/>
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent