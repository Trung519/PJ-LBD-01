import React, { Component } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer-col'>
              <h2>Đoàn hội CSE</h2>
              <ul>
                <li>
                </li>
                <li></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h2>Câu lạc bộ</h2>
              <ul>
                <li></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h2>Thông tin liên lạc</h2>
              <ul >
                <li><FontAwesomeIcon icon={faLocationDot} id='icon'/> Văn phòng: 602 BK.B6, ĐH Bách Khoa, cs2</li>
                <li><FontAwesomeIcon icon={faFacebook} id='icon'/><a href='https://www.facebook.com/BKCSE.Multimedia'> BTT khoa KH&&KT Máy Tính - ĐH Bách Khoa </a></li>
                <li><FontAwesomeIcon icon={faEnvelope} id='icon'/> dtn-ktmt@hcmut.edu.vn</li>
              </ul>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}
