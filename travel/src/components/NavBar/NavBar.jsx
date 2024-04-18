import React, { useState } from 'react';
import "./navbar.scss"
import {MdOutlineTravelExplore } from "react-icons/md"
import {IoMdCloseCircle} from  "react-icons/io"

import {TbGridDots} from "react-icons/tb"

const NavBar = () => {
    const [active,setActive] = useState('navBar')
    const isActive = ()=>{
        setActive('navBar activeNavBar')
    }
    const removeNavBar = ()=>{
        setActive('navBar')
    }
    return (
       <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>Travel</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Packages
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Shop
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            About
                        </a>
                    </li>
                     <li className="navItem">
                        <a href="#" className="navLink">
                         Pages
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            News
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Contact
                        </a>
                    </li>
                    <button className="btn">
                        <a href="#">BOOK NOW</a>
                    </button>
                    
                </ul>
                <div className="closeNavbar">
                <IoMdCloseCircle onClick={removeNavBar} className="icon" />
                </div>
               
            </div>
            <div onClick={isActive} className="toggleNavbar">
                <TbGridDots className="icon" />
                </div>
        </header>

       </section>
    );
};

export default NavBar;