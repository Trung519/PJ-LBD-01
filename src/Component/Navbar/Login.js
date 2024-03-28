import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import './Login.css';
import Home from './Home';
import bg_lg from '../assets/bg-login.jpg';
import { json, useNavigate } from 'react-router-dom';
function Func_Login() {
    const [action, setaction] = useState('Đăng nhập');
    const [userId, setuserId] = useState('');
    const [password, setpassword] = useState('')
    const handleinput = () => {
        if (!userId || !password) {
            alert("Hãy kiểm tra tên đăng nhập và mật khẩu lại!")
        }
    }
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(JSON.parse(localStorage.getItem('user')));
    }, [])
    // const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name");
        if (e.target.userid.value && e.target.pw.value) {
            let existingUser = false;
            if (localStorage.getItem('user')) {
                for (let i of data) {
                    if (i.userid === e.target.userid.value) {
                        existingUser = true;
                        if (action !== "Đăng nhập") {
                            alert("Tên đăng nhập đã tồn tại! Hãy chọn một tên khác hoặc đăng nhập");
                            setaction("Đăng nhập");
                        }
                        else {
                            if (i.pw == e.target.pw.value)
                                <Home />
                            else alert("Mật khẩu không đúng");
                        }
                        break;
                    }
                }
            }
            if (!existingUser) {
                if (action === "Đăng nhập") {
                    alert("Tài khoản không tồn tại! Hãy đăng ký tài khoản mới!");
                    setaction("Đăng ký");
                }
                else {
                    alert("Đăng ký thành công! Hãy đăng nhập lại!");

                    if (localStorage.getItem('user'))
                        localStorage.setItem('user', JSON.stringify([...data,
                        {
                            userid: e.target.userid.value,
                            pw: e.target.pw.value,
                            username: e.target.username.value,
                            userphone: e.target.userphone.value
                        }]))
                    else {
                        localStorage.setItem('user', JSON.stringify([{
                            userid: e.target.userid.value,
                            pw: e.target.pw.value,
                            username: e.target.username.value,
                            userphone: e.target.userphone.value
                        }]))
                        setdata([localStorage.getItem('user')]);
                    }

                    setaction("Đăng nhập");
                    window.location.reload();
                }
            }
        }
    }
    return (
        <>
            <div id='loginjs' style={{ backgroundImage: `url(${bg_lg})`}}>
                <form id='formlogin' onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <div>
                            <h1 id='header'><b>{action}</b></h1>
                        </div>
                        {action === "Đăng ký" ? <div>
                            <input type='text' name='username' placeholder='Họ và tên'></input>
                            <input type='number' name='userphone' placeholder=' Số điện thoại'></input>
                        </div> : <div></div>}
                        <div>
                            <input type='text' placeholder=' Tên đăng nhập' name='userid' id='placeholder_user' onChange={(e) => { setuserId(e.target.value) }}></input>
                        </div>
                        <div>
                            <input type='password' placeholder=' Mật khẩu' name='pw' onChange={(e) => { setpassword(e.target.value) }}></input>
                        </div>
                        <div>

                        </div>
                        <div className='submit-container'>
                            {action === "Đăng nhập" ? <button className='submit' >Đăng nhập</button> : <div></div>}
                            <button className='submit' onClick={() => { setaction("Đăng ký") }}>Đăng ký</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
export default function Login() {
    return (
        <Func_Login />
    )
}

