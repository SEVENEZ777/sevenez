import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

import './SignInPage.css'



export default function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return ( 
        
        <form onSubmit={handleSubmit} className='auth-form'>
            <h2 className='signup-title'>join the family</h2>
            <label>
                <span>email:</span>
                <input 
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input 
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
            <span>what's your name?</span>
            <input 
                required
                type="text" 
                onChange={(e) => setDisplayName(e.target.value)} 
                value={displayName} 
            />
            </label>
            <button className="btn-signin"><strong>no regrets</strong></button>
            { error && <p>{error}</p> }
        </form>

        )
    }
