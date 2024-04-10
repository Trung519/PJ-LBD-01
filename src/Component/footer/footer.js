import React, { Component } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='container'>
        <div className='row py-5 text-white'>
          <div className='col-md-6 mx-auto mb-4'>
            <h4 className='text-warning display-6' id='Title_bg'> <FontAwesomeIcon icon={faBug}></FontAwesomeIcon> Đoàn hội CSE</h4>
            <div className='col-md-7 pt-2'>
              <p >Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.</p>
            </div>
            <div className='col-md-3 pt-2' style={{display: "flex", justifyContent: "space-between"}}>
            <FontAwesomeIcon icon={faFacebook} className='pe-1 fs-4' />
            <FontAwesomeIcon icon={faLocationDot} className='pe-2 fs-4' />
            <FontAwesomeIcon icon={faEnvelope} className='pe-1 fs-4' />
            <FontAwesomeIcon icon={faTiktok} className='pe-1 fs-4' />
            </div>
          </div>
          <div className='col-md-2 col-sm-12'>
            <h4 className='text-warning'>Services</h4>
            <p>About</p>
            <p>Return Policy</p>
            <p>Return Serve</p>
            <p>Customer Policy</p>
          </div>
          <div className='col-md-2 col-sm-12'>
            <h4 className='text-warning'>Usefull links</h4>
            <p>Sitemap</p>
            <p>Shipping</p>
            <p>Super market</p>
          </div>
          <div className='col-md-2 col-sm-12'>
            <h4 className='text-warning'>Business</h4>
            <p>KMS</p>
            <p>VNG</p>
            <p>Sky Mavis</p>
            <p>CUBE</p>
          </div>
        </div>
        <p className='text-white text-center mb-0 pb-2'>@Copyright Code by Quang Trung 2024</p>
      </div>
    </div>
  )

}
export default Footer