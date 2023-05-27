import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {GoSearch,GoThreeBars} from 'react-icons/go';
import './Navbar.scss';

function Navbar() {
    

    return (
        <div className='navbar'>
            <div className='logo'>
                <p>Vape PI</p>
            </div>
            <div className='nav'>
                <ul>
                    <li><GoSearch/></li>
                    <li><FiShoppingCart /></li>
                    <li><GoThreeBars /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;