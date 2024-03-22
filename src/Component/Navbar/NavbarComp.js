import React, { Component, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Routes, // Sử dụng Routes thay vì Switch
  Route,
  Link
} from 'react-router-dom';
import Add_Event from './Add_Event';
import Home from './Home';
import List_Event from './List_Event';
import Login from './Login';
import '../../App.css'
import Logo_HoiSv from '../assets/Img_HoiSv.png';
import Logo_Doan from '../assets/logo_DoanTN.png';
import Logo_HCMUT from '../assets/logo_HCMUT.png';

function Func_NavbarComp() {
  const [stateLogin, setStateLogin] = useState(true);
  const [username, setusername] = useState("")
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setStateLogin(false);
    }
    else setStateLogin(true);
  }, []);
  const handleLogout = () => {
    if (localStorage.getItem('user'))
      localStorage.removeItem('user');
    setStateLogin(true);
  }
  return (
    <><Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
              <div id='img_container'>
                <img src={Logo_Doan} id='img_logoD'></img>
                <img src={Logo_HCMUT} id='img_logoH'></img>
                <img src={Logo_HoiSv} id='img_logoHsv'></img>
              </div>
              CSE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div style={{ display: 'flex' }}>
                  <Nav.Link id='navtab' as={Link} to="/Home">Trang Chủ</Nav.Link>
                  <Nav.Link id='navtab' as={Link} to="/Add_Event">Thêm sự kiện</Nav.Link>
                  <Nav.Link id='navtab' as={Link} to="/List_Event">Danh sách sự kiện</Nav.Link>
                </div>
                {stateLogin ? (
                  <Nav.Link title='button' id='buttonlogin' as={Link} to={"./Login"} onDoubleClick={() => { window.location.reload() }}>Login</Nav.Link>
                ) : (
                  <>
                    <NavDropdown id='navtab' title={user.map((data) => data.username)}>
                      <NavDropdown.Item title='button' id='btn-logout' onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/Add_Event" element={<Add_Event />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/List_Event" element={<List_Event />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default function NavbarComp() {
  return (
    <Func_NavbarComp />
  )
}
