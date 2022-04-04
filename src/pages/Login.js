import React from "react"

import './Login.css'
import { useLogin } from '../hooks/useLogin'
import { useState } from "react"
import { useLogout } from "../hooks/useLogout"





export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, login } = useLogin()
    const { logout } = useLogout()
   
  
    const handleSubmit = (e) => {
      e.preventDefault()
      login(email, password)
    }
  
    return (
      <form onSubmit={handleSubmit} className="login">
        <h2>login</h2>
        <label>
          <span className="login-info">email:</span>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>
        <label>
          <span className="login-info">password:</span>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </label>
       
        <button className="btn">hello friend</button>
        {error && <p>{error}</p>}
        <button onClick={logout} className="btn2">thanks for your visit</button>
      </form>
    )
  }