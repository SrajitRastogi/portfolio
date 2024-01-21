import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/img/LOGO.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MailchimpForm } from './MailchimpForm';
import github from "../assets/img/github-mark-white.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-item-center'>
          {/* <MailchimpForm/> */}
          <Col sm={6}>
             <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className='text-center text-sm-end'> 
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/srajit-rastogi-977b24206/" target='_blank'><img src={navIcon1} /></a>
              <a href='https://github.com/SrajitRastogi'><img src={github} /></a>
              <a href='https://www.instagram.com/_srajitrastogi?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><img src={navIcon3} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
