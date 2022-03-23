import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const [hamburger,setHamburger]=useState(false);
    const navigate=useNavigate();
    return (
        <div>
            
          
            <nav style={{ backgroundColor: "#f7f7f7"}} className="p-3 navbar">
                <a onClick={()=>{navigate('/')}} className="nav-logo">CoWin</a>
                <ul className={hamburger ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a onClick={() => { navigate('/') }} className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Updates</a>
                    </li>
                    <li className=" nav-item">
                        <a className="nav-link">Settings</a>
                    </li>
                    <li style={{ marginLeft:"20px"}}>
                        <img className="avatar-image" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa743gMgAQiEJZsTrjoLGS0Qgghopq7B2I6FYpewgRYhNzzAEiRVolY2GXZfB0ZvKUN-s&usqp=CAU'}  alt=""></img>
                          
                      </li>
                </ul>
                <div onClick={() => {setHamburger(!hamburger)}} className={hamburger ? "hamburger active":"hamburger"}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            {/* <!-- top var for sm device --> */}

            <div className=" p-2 topnav">
                <a onClick={() => { navigate('/') }} className="active" >CoWin</a>
                {/* <!-- <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a> --> */}
                <img className="avatar-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa743gMgAQiEJZsTrjoLGS0Qgghopq7B2I6FYpewgRYhNzzAEiRVolY2GXZfB0ZvKUN-s&usqp=CAU"} alt="" />
            </div>


            <nav className="nav">
                <a onClick={() => { navigate('/') }} className="nav__link">
                    <i className="material-icons nav__icon">dashboard</i>
                    <span className="nav__text">Dashboard</span>
                </a>
                <a className="nav__link nav__link--active">
                    <i className="material-icons nav__icon">person</i>
                    <span className="nav__text">Profile</span>
                </a>
                <a  className="nav__link">
                    <i className="material-icons nav__icon">insert_chart</i>
                    <span className="nav__text ">Updates</span>
                </a>
                {/* <!-- <a href="#" className="nav__link">
                      <i className="material-icons nav__icon">lock</i>
                      <span className="nav__text">Privacy</span>
                  </a> --> */}
                <a  className="nav__link">
                    <i className="material-icons nav__icon">settings</i>
                    <span className="nav__text">Settings</span>
                </a>
            </nav>

            
           
        </div>
    )
}

export default Navbar