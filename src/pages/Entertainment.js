import React from 'react'
import './Entertainment.css'
import PaypalCheckoutButton from '../components/PaypalCheckoutButton'



import TicketScreen from '../components/TicketScreen'

export default function Entertainment() {



  return (
    <div className='card-tickets'>
      <TicketScreen />
      
      <div className='paypal-button-container'>
        <PaypalCheckoutButton product={product} />
      </div>

      
    </div>
    
  )
}
