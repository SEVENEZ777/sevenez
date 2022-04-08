import React from 'react'
import './Entertainment.css'
import { loadStripe } from '@stripe/stripe-js'

import TicketScreen from '../components/TicketScreen'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Entertainment() {



  return (
    <div className='card-tickets'>
      <TicketScreen />
      
      

      
    </div>
    
  )
}
