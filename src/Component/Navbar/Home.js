import React, { Component } from 'react'
import './Home.css'
import imagedh from '../assets/Image_DH.png'
import { render } from '@testing-library/react'
import { useLocation, useNavigate } from 'react-router-dom'
function Func_Home() {
  const data = useLocation();
  const nav = useNavigate();
  return (
    <>
      <div className='Layout_Home'>
        <h1 id='titleHome'>Đoàn thanh niên <br /> Hội sinh viên <br /> Khoa KH&KT Máy tính</h1>
        <img src={imagedh} id='imageDH'></img>
      </div>
      <div>
        <h1 id='Notify'>Thông báo chung</h1>
        <button onClick={()=>nav(-1)}>LOGOUT</button>
      </div>
    </>
  )
}
export default function Home() {
  return(
    <Func_Home />
  )
} 
