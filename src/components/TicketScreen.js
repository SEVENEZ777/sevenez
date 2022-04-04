import React from 'react'
import image from '../img/7STAGES.png'
import PaypalCheckoutButton from './PaypalCheckoutButton'

import './TicketScreen.css'



export default function TicketScreen() {
  const product = {
    describtion: "Ticket 7 Stages Comedy Open Mic Show",
    price: 10,
    stock: 100,
    
    }
    
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <img src={image} alt=''/>
            </div>
            <div className='ticket-text'>
                <h1 className='ticket-title'>Comedy Open Mic Show</h1>
                <p><strong> Habt Ihr Lust auf einen lockeren Abend mit Lachgarantie?<br /><br />Die neue Comedy Open Mic Show „7stages“  live aus Düren wird moderiert<br /> und präsentiert vom Stand-Up Newcomer Nico Soete aus Düren.<br />Es erwarten euch bis zu 8 KünstlerInnen aus dem Bereich der Stand-Up Comedy,<br /> die einen Teil Ihres Programmes live auf der Bühne für euch performen werden.<br />Die Mischung macht‘s!<br /> Auf unserer Bühne stehen sowohl bekannte Künstler, als auch aufstrebende Newcomer,<br /> die eure Lachmuskeln abwechselnd auf die Probe stellen.</strong></p>            
            </div>
            </div>
            <div className='seperator'>
            <div className='seperator2'></div>
            <div className='seperator3'></div>  
              <div className='paypal'>
                <p className='checkout-title'><strong>lachen ist gesund - 1 ticket 10 euro</strong></p>
                <div className='paypal-button-container'>
                  
                  <PaypalCheckoutButton product={product} />
                  
                </div>
              </div>  
            </div>
            
      
    </div>
  )
}
