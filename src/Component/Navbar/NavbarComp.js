import React, { Component } from 'react';
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
export default class NavbarComp extends Component {
  render() {
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
                  <Nav.Link title='button' id='buttonlogin' as={Link} to={"./Login"} onDoubleClick={() => { window.location.reload() }}>Login</Nav.Link>
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
}
