import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/login.css';

class Home extends Component {

    render() {
        return (
            <div>
                HERE!!!
                <Link to={'/login'}>Login</Link>
            </div>
        )
    }
}

export default Home;
