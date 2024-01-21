import React, { useState,useEffect} from 'react'
import {Navbar, Container,Nav, NavDropdown, NavLink} from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import logo from '../assets/img/LOGO.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from "../assets/img/github-mark-white.png"

export const NavBar = () => {
   const[activeLink,setActiveLink] = useState('home');

   const[scrolled,setScrolled] = useState(false);

   const handleNavLink = (name) => {
    if(name==='home'){
      setActiveLink('home')
    }else if(name === 'skills'){
      setActiveLink('skills')
    }else if(name === 'projects'){
      setActiveLink('projects');
    }
    
   } 

   useEffect(() => {
     const onScroll = () => {
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
     }
   
     window.addEventListener('scroll',onScroll);

     return () => window.removeEventListener("scroll",onScroll);
   }, [])
   


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='LOGO'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>handleNavLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>handleNavLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>handleNavLink("projects")}>Projects</Nav.Link>
            {/* <Nav.Link href="#Experience" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Experience</Nav.Link> */}
          </Nav>

          <span className='navbar-text'>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/srajit-rastogi-977b24206/" target='_blank'><img src={navIcon1} /></a>
              <a href='https://github.com/SrajitRastogi'><img src={github} /></a>
              <a href='https://www.instagram.com/_srajitrastogi?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><img src={navIcon3} /></a>
            </div>
            <button className="vvd" onClick={()=>console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
