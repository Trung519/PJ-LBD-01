import { Component } from 'react';
import Logo_HoiSv from '../assets/Img_HoiSv.png';
import Logo_Doan from '../assets/logo_DoanTN.png';
import Logo_HCMUT from '../assets/logo_HCMUT.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Add_Event from './Add_Event';
import Home from './Home';
import List_Event from './List_Event';
import Login from './Login';
import './NavigationBar.css';

class NavigationBar extends Component {
    state = { 
        clicked: false,
        currentPage: 'home' };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        let navbarComponent;

        switch (this.state.currentPage) {
            case 'home':
                navbarComponent = <Home />;
                break;
            case 'add_event':
                navbarComponent = <Add_Event />;
                break;
            case 'list_event':
                navbarComponent = <List_Event />;
                break;
            case 'login':
                navbarComponent = <Login />;
                break;
            default:
                navbarComponent = 'Page not found 404';
        }
        return (
            <>
                <nav>
                    <div id='logo-container'>
                        <img src={Logo_Doan} id='logoDoan' alt="Logo Đoàn"></img>
                        <img src={Logo_HCMUT} id='logoBK' alt="Logo HCMUT"></img>
                        <img src={Logo_HoiSv} id='logoHoi' alt="Logo Hội"></img>
                        <span id="cse-brand">CSE</span>
                    </div>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><button className="nav-btn" onClick={() => this.handlePageChange('home')}  >Trang chủ</button></li>
                            <li><button className="nav-btn" onClick={() => this.handlePageChange('add_event')} >Thêm sự kiện</button></li>
                            <li><button className="nav-btn" onClick={() => this.handlePageChange('list_event')}>Danh sách sự kiện</button></li>
                            <li><button className="nav-btn" onClick={() => this.handlePageChange('login')}>Đăng nhập</button></li>
                        </ul>
                                          
                    </div>

                    <div id='mobile' onClick={this.handleClick}>
                        <FontAwesomeIcon id="bar"
                            icon={this.state.clicked ? faTimes : faBars}
                        />
                    </div>

                </nav>
                {navbarComponent} 

            </>
        );
    }
}

export default NavigationBar;