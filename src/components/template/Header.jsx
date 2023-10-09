import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Font from 'react-font';

import MyImage from '../../img/Geek.png'
import { Link, NavLink } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaLinkedin, FaGithub, FaSuitcase } from "react-icons/fa";
import {
    BsSun,
    BsFillMoonStarsFill,
    BsInstagram,
    BsGit,
    BsFillBagHeartFill,
    BsFillPinMapFill,
    BsFillPersonLinesFill,
    BsTerminalFill
} from 'react-icons/bs';
const Header = ({ dark, updateDark }) => {
    return (
        <><Navbar
            bg={`${dark ? "dark" : "light"}`}
            variant={`${dark ? "dark" : "light"}`}
            expand="lg"
            sticky='top'
            className={`fw-bolder shadow-lg  ${dark ? "col-12" : "col-12"}`}
        // fixed="top"
        >
            <Container>
                <Navbar.Brand href="/">
                    <Font family='Caveat'>
                        <img
                            src={MyImage}
                            alt="Geek"
                            width="50"
                            height="50"
                            className="d-inline-block align-end bg-light rounded imgGeek" />

                        {" Yelmouss".split("").map((letter, index) => {
                            return (

                                <span key={index} className="text-fun-pink fs-1">
                                    {letter}
                                </span>

                            );
                        })}
                    </Font>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={'./About'} className={({ isActive }) => `nav-link text-center ${isActive && ' '}`}
                            style={({ isActive }) => ({ borderBottom: isActive ? " 2px solid #64ffda" : "" })}>
                            <BsFillPersonLinesFill /> <br />  About

                        </NavLink>

                        <NavLink to={'./Exp'} className={({ isActive }) => `nav-link text-center ${isActive && ' '}`}
                            style={({ isActive }) => ({ borderBottom: isActive ? " 2px solid #64ffda" : "" })}>
                            <FaSuitcase /> <br />  Experience

                        </NavLink>


                        <NavLink to={'./Works'} className={({ isActive }) => `nav-link text-center ${isActive && ' '}`}
                            style={({ isActive }) => ({ borderBottom: isActive ? " 2px solid #64ffda" : "" })}>
                            <BsFillBagHeartFill /> <br />  Works

                        </NavLink>


                        <NavLink to={'./GithubRepos'} className={({ isActive }) => `nav-link text-center ${isActive && ' '}`}
                            style={({ isActive }) => ({ borderBottom: isActive ? " 2px solid #64ffda" : "" })}>
                            <BsGit /> <br />  GitReps

                        </NavLink>

                        <NavLink to={'./Services'} className={({ isActive }) => `nav-link text-center ${isActive && ' '}`}
                            style={({ isActive }) => ({ borderBottom: isActive ? " 2px solid #64ffda" : "" })}>
                            <BsTerminalFill /> <br />  Services

                        </NavLink>

                        {/* 
                        <Link to={'./Works'} className='nav-link text-center'>  <BsFillBagHeartFill /> <br />   Works</Link>
              
                        <Link to={'./GithubRepos'} className='nav-link text-center '>    <BsGit />    <br />   GitReps</Link>
                        <Link to={'./Map'} className='nav-link text-center '> <BsFillPinMapFill /> <br /> Map</Link> */}
                        {/* <Link to={'./Instagram'} className='nav-link text-center'>   <BsInstagram />  <br />  Insta Api</Link> */}

                    </Nav>
                    <Nav>
                        <Nav.Link href="#memes">
                            By Yass Elmouss
                        </Nav.Link>


                        <Nav.Link onClick={() => updateDark(!dark, localStorage.setItem("dark", !dark))}>

                            {dark
                                ? <BsSun />

                                : <BsFillMoonStarsFill />}

                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


            <div className="vertical-line"></div>
            <div className="social-icons bg-dark p-2 rounded bg-opacity-50">

                <NavLink to="https://instagram.com/yelmouss" className="social-icon" target={"_blank"}
                    rel="noreferrer" >
                    <FaInstagram />
                </NavLink>

                {/* Ajoutez d'autres icônes de réseaux sociaux avec des liens */}
                <NavLink to="https://g.page/r/CU9JIKmBu2pkEB0/review" className="social-icon"
                    target={"_blank"}
                    rel="noreferrer">
                    <FaGoogle />
                </NavLink>

                <NavLink to="https://www.linkedin.com/in/yelmouss/" className="social-icon"
                    target={"_blank"}
                    rel="noreferrer">
                    <FaLinkedin />
                </NavLink>

                <NavLink to="https://github.com/yelmouss" className="social-icon"
                    target={"_blank"}
                    rel="noreferrer">
                    <FaGithub />
                </NavLink>
            </div>
        </>
    )
}

export default Header