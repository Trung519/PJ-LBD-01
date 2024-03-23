import React, { Component } from 'react'
import './Home.css'
import imagedh from '../assets/Image_DH.jpeg'
import k22 from '../assets/k22.jpeg'
import { render } from '@testing-library/react'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Func_Home() {
  const data = useLocation();
  const nav = useNavigate();
  return (
    <>
      <Slide>
        <div className="Layout_Home">
      <img src={imagedh} alt="logo" className="imageDH" />
      <div id="titleHome">Đoàn thanh niên <br /> Hội sinh viên <br /> Khoa KH&KT Máy tính</div>
    </div>
    <div className="Layout_Home">
      <img src={k22} alt="k22" className="imageDH" />
      <div id="K22title">
        K22 <br /> MÃI ĐỈNH
      </div>
    </div>
       
        
      </Slide>

    </>
  )
}
export default function Home() {
  return (
    <Func_Home />
  )
} 
