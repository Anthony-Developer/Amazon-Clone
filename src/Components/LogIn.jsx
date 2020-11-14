import React from 'react'
import '../Styling/LogIn.css'
import { Link } from 'react-router-dom'

function LogIn() {
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1> Sign In </h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login_signInButton">Sign In</button>
                </form>

                <p> By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. pleasse see our Privacy Notice, our Cookies notice and our Interest-Based Ads Notice. </p>

                <button className="login_registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LogIn
