import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {

    return (
        <div>
            <div className="login" id="SignIn">
                <h1>Store Manager! | STORE OWNER</h1>
                <input type="text" placeholder="Enter Your Email Here..." name="Email" required />  
                <input type="text" placeholder="Enter Your Username Here..." name="Username" required />  
                <input type="password" placeholder="Enter Your Password Here..." name="Password" required /><br /><br />  
                <input type="password" placeholder="Confirm Password..." name="Re-Password" required /><br /><br />  
                <Link className="btn" to={'/login'} role="button">
                    <input type="button" id = "SignUp" value="Sign Up" /><br /><br />
                </Link>
                <a href="#" className="forgot"><strong>Forgot your Password? Click Here!</strong></a><br />
            </div>
        </div>
    )
}
