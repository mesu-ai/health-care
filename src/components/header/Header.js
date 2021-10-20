import React from 'react';
import './Header.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brand from '../../image/heartlogo.png';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
   const {user,logOut}= useFirebase();
    return (

        //top navigation bar
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>

        {/* website brand logo info name */}
        <Navbar.Brand className="d-flex align-items-center">
            <img
                src={brand}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Heart Care"
            />{' '}
           <span className="brand-name">Heart <span className="text-danger">Care</span> </span> 
        </Navbar.Brand>

        {/* responsive toggle button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
        <Navbar.Collapse id="responsive-navbar-nav">
           
           {/* navigation link */}
            <Nav className="me-auto d-flex align-items-center">

            <NavLink activeClassName="active" className="navlink" to='/home'>Home</NavLink>
            <NavLink activeClassName="active" className="navlink" to='/services'>Services</NavLink>
            <NavLink activeClassName="active" className="navlink" to='/appointment'>Appointment</NavLink>
            <NavLink activeClassName="active" className="navlink" to='/aboutus'>About Us</NavLink>
            <NavLink activeClassName="active" className="navlink" to='/contract'>Contract</NavLink>

            
            </Nav>

            {/* user name and access button */}
            <Nav className="d-flex align-items-center">

                {user.email && 
                <p className="m-3">{user.displayName}</p>
                }
                
                {!user.email?
                <NavLink className="navlink" to='login'>Login</NavLink>:
                <button onClick={logOut} className="btn btn-danger">Logout</button>

                }


            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
                
    );
};

export default Header;