import wir from '../img/beide.JPG'
import wir2 from '../img/beide2.jpeg'
import './About.css'

import { Link } from 'react-router-dom'


// nested routes


export default function About() {
  

  return (
    <div >
        <div className="wir">
          <img src={wir} />
        </div>
        
        <div className="container2">
          <h1>about us</h1>
          <h3 className="schrift">hello everyone, <br />we are Nico and Leon <br />two ambitious brothers <br />who want to make the world better<br />sounds pathetic but with peaceful minds<br />hearts full of love<br />is it possible to transmit the right values<br />that we need<br />to live in a harmlessly open world<br />where anybody can be itself<br />and nobody gets threatend by an other human<br />it's a long way to go<br />let's start right here </h3>
        </div>
        <div className="wir2">
          <img src={wir2} />
        </div>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="NPHPW9K5257N6" />
        <input type="image" src="https://pics.paypal.com/00/s/ZjBkODgzODMtNzgxZS00NDJlLWEyYjEtYjI4NDFlY2ZjMWIw/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
        </form>
        
      <div>
        
      </div>
      <footer>
        <div className="footer">
          <h4>seven.ez</h4>
          <p>Nico Soete <br />Georgstraße 46<br />52353 Düren<br />Tel: 01638851787</p>
          <p>© 2022 Copyright: Nico Soete</p>
        </div>      
        <nav className="navdown">
          
          <Link to="/impressum">Impressum</Link>
          <Link to="/AGB">AGB</Link>

        </nav>
      </footer>
    </div>
  )
}
