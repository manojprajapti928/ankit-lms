import React from 'react'
import "./NavBar.css"
import Rise_up from '../assets/logo_img.png';

import cart_icon from '../assets/cart-solid-24.png';

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div id ="MainNav">
    <img className='logo_img' src={Rise_up}/>
        {/* <h2>LMS</h2> */}
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Courses"}>Courses</Link>
            </li>
            <li>
                <Link to={"/Pactices"}>Practices</Link>
            </li>
            <li>
                <Link to={"/UseAI"}>Use AI</Link>
            </li>
            <li>
                <Link to={"/AddCart"}><div className="updated">
            <img className="icon" src={cart_icon} />
          </div></Link>
            </li>
        </ul>
    </div>
  )
}