import React from 'react'
import { Link } from 'react-router-dom'

export const HomeDisplay = () => {
    return (
        <div>
            <div className="MainContainer">

                <div className="TitleContainer">
                    <div className="home">
                        <h1 className="name">Store Manager</h1><br />
                    </div>
                    <Link className="btn" to={'/login'} role="button">
                        <button> Login </button>
                    </Link>
                    
                    <Link className="btn" to={'/signup'} role="button">
                        <button> Signup </button>
                    </Link>

                </div>

                <div className="ContentContainer">
                    <div className="Content">
                        <h1 className="About">About Us</h1>
                        <div className="description">
                            <p>Store Manager is the world's leading Sales and Inventory management system.</p>
                            <p>We offer comprehensive system that addresses the day to day activities of your business.</p>
                            <p>The system has two levels of users allowing you as the business owner access and privilage to sections of the system that are restricted to the other users.</p>
                            <p>The store owner can create, revoke or grant access to a sales attendant, making it possible to manage your staff.</p>
                            <p>The store owner can view and track the perfomance by each sales attendant.</p>
                            <p>The sales attendants can track their sales over time and view their perfomance.</p>
                            <p>The sales can be filtered through several criteria to generate useful report for refference.</p>
                            <p>The system tracks stock levels to ensure that you are alerted when stock is depleted or reached the minimum threshold.</p>
                            <p>The system allows classification of items into diffent categories for easier management.</p>
                        </div><br /><br />
                    </div><br /><br />
                </div>

            </div>

            <div className="footer">
                <p className="copyrt">&copy; 2018, Store Manager</p>
                <p className="slogan">Move your Business to the future!</p>
            </div>
        </div>    
    )
}

