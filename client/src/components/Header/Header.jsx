import React from "react"
import Navbar from "../Navbar/Navbar"
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className="promo">
                <span>The Best Look</span><br />
                <h1>Anytime Anywhere</h1>
                <span>Starts from 10,000 MMK</span><br />
                <button>View</button>
            </div>
        </div>
    )
}

export default Header;
