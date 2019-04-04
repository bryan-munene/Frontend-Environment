import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <div className="login" id="SignIn">
                <Link className="btn" to={'/'} role="button">
                    <button className="signin"> Home </button>
                </Link>
                
                <Link className="btn" to={'/signup'} role="button">
                    <button className="signup"> Signup </button>
                </Link>

                <h1>Store Manager! | STORE OWNER</h1>
                <input type="text" placeholder="Enter Your Email Here..." name="Email" id="login_email" required />  
                <input type="password" placeholder="Enter Your Password Here..." name="Password" id="login_password" required /><br /><br />  
                <Link className="btn" to={'/'} role="button">
                    <input type="button" id = "SignIn" value="Sign In" /><br /><br />
                </Link>
                <a href="#" className="forgot"><strong>Forgot your Password? Click Here!</strong></a><br />
            </div>
        </div>
    )
}

