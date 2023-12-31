import React from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import yelpImage from '../images/yellp.png'
// import { Authenticator } from '@aws-amplify/ui-react';

function NavBar(props) {
    const navigate = useNavigate();
    const handleLogOut = () => {
        props.logOut();
    }
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-list">
                    <li className='nav-item'><img src={yelpImage} alt="" /></li>
                    <li className="nav-item" onClick={() => navigate('/')}>
                        Home
                    </li>



                </ul>

            </nav>
            <div className='button' onClick={handleLogOut}>Logout</div>
        </div>
    )
};

export default NavBar;
