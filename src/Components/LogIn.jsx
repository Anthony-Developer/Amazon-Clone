import React, { useState } from 'react'
import '../Styling/LogIn.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function LogIn() {
    const history = useHistory()
    const [email,  setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Using Firebase to sign in using your email and apssword
    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth  => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    // Using Firebase to create an account with email and password
    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1> Sign In </h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login_signInButton" onClick={signIn} type='submit' >Sign In</button>
                </form>

                <p> By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. pleasse see our Privacy Notice, our Cookies notice and our Interest-Based Ads Notice. </p>

                <button className="login_registerButton" onClick={register} >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LogIn
