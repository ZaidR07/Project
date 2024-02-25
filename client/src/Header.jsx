import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Admin_panel from './Admin_panel';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainHeader>
      <nav className='navbar'>
        <div className="nav1">
          <NavLink to="/" >
            <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="20px" />
            <span>FITNESS365</span>

          </NavLink>
        </div>
        <div className="nav2">
          <ul className='navlist'>
            <li>
              <NavLink to="/About" >
                <span>About</span>

              </NavLink>
            </li>
            <li>
              <NavLink to="/Workout" >
                <span>Workout</span>

              </NavLink>

            </li>
            <li>
              <NavLink to="/Diet" >
                <span>Diet</span>

              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" >
                <span>Shop</span>

              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" >
                <span>Contact</span>

              </NavLink>
            </li>


          </ul>
        </div>
        <div className="nav3">
          <FontAwesomeIcon icon={faBell} className='awesomeicons' id='bell' />

          <div style={{ borderRadius: '100%', width: '30px', height: '30px', backgroundColor: 'white', marginLeft: '1vw' }} className="profile">

          </div>

          <div className="dropdown-container">
            <button className="dropdown-button" onClick={handleToggle}>
              <FontAwesomeIcon icon={faAngleDown} className='awesomeicons' />
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <p>Profile</p>
                <p>Log out</p>
                <NavLink to = '/Admin_panel'>
                  <p>Admin Panel</p>
                </NavLink>
              </div>
            )}
          </div>


        </div>
      </nav>
    </MainHeader>
  )
}
const MainHeader = styled.header`
  .navbar{
    height: var(--navbarheight);
    display: flex;
    font-family: 'Times New Roman', Times, serif;
    background-image: url(../Resorces/nav_img2.jpg);
    
  
  }
  .nav1{
  
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 12%;
    margin-left: 3%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;
    


  }
  .nav2{
    /* background-color: ${({ theme }) => theme.colors.navbg}; */
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter:(15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    margin-left: 20%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;

    
    
    


  }
  .nav3{
    /* background-color: ${({ theme }) => theme.colors.navbg}; */
    height: var(--multinavheight); 
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width:10% ;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;
    padding: 5px;
  


  }
  .navlist{
    width: 100%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    justify-content: space-around;
    
  }
  .nav2 a:hover{
    color: #E49472;
  }

  a{
    text-decoration: none;
    list-style: none;
    color: white;
    font-family: 'Times New Roman', Times, serif;


  }

  .awesomeicons {
    font-size: 1.3rem;
    color: #E49472;

  }
  /* Dropdown.css */
.dropdown-container {
  position: relative;
  display: inline-block;
  
  


}

.dropdown-button {
  /* background-color: #242426; */
  background: rgba( 255, 255, 255, 0 );
  width: 40px;
  height: 30px;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: block;
  position: absolute;
  top: 5vh;
  right: -2vw;
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0 );
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: white;
  width: 8vw;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content p {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content p:hover {
  background-color: #E49472;
}
`

export default Header;
