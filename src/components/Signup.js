import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {

    render() {
        return (
            <div>
                <div class="login" id="SignIn">
                    <h1>Store Manager! | STORE OWNER</h1>
                    <input type="text" placeholder="Enter Your Email Here..." name="Email" id="login_email" />  
                    <input type="password" placeholder="Enter Your Password Here..." name="Password" id="login_password" /><br /><br />  
                    <Link className="btn" to={'/login'} role="button">
                        <input type="button" id = "SignIn" value="Sign up" onclick="return Users.Login()" /><br /><br />
                    </Link>
                    <a href="#" class="forgot"><strong>Forgot your Password? Click Here!</strong></a><br />
                </div>
            </div>
        )
    }
}

export default Signup;
