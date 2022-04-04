import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider, } from '@paypal/react-paypal-js'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'



import Login from './pages/Login'

import TicketScreen from './components/TicketScreen'
import Impressum from './components/Impressum'
import Allgemeine from './components/Allgemeine'



function App() {
  
  
  return (
    
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
      <div className="App">
        <BrowserRouter>        
          <Navbar />
          <Routes>
          <Route path="/AGB" element={<Allgemeine />} />  
          <Route path="/impressum" element={<Impressum />} />              
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} /> 
          <Route path="/entertainment/*" element={<TicketScreen />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  )
}

export default App;