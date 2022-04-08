import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    


  return (
    <div>
        <nav>
          
          <h1>7EZ</h1>
          
          <Link to="/"><strong>home</strong></Link>
          <Link to="/about"><strong>we are</strong></Link>
          <Link to="/entertainment"><strong>entertainment</strong></Link>
          
                  
        </nav>
    </div>
  )
}

