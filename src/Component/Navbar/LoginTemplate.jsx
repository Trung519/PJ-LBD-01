import React from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import chatimg from '../../Component/assets/chat.png';
import './LoginTemplate.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './Home';
export default function LoginTemplate() {
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
    const handleSubmit = (e) => {
        console.log("sdadasad",e);
        e.preventDefault();
        if (action === "Đăng ký" && (!e.target.username.value || !e.target.userphone.value)) {
            setaction("Đăng ký");
        }
        else if (e.target.userid.value && e.target.pw.value) {
            let existingUser = false;
            if (localStorage.getItem('user')) {
                for (let i of data) {
                    if (i.userid === e.target.userid.value && i.pw === e.target.pw.value && action === "Đăng nhập") {
                        console.log("Đăng nhập thành công");
                        window.location.reload();
                        existingUser = true;
                        break;
                    }
                    else if (i.userid === e.target.userid.value) {
                        existingUser = true;
                        if (action === "Đăng ký") {
                            alert("Tên đăng nhập đã tồn tại! Hãy chọn một tên khác hoặc đăng nhập!");
                            setaction("Đăng nhập");
                        }
                        else {
                            if (i.pw === e.target.pw.value)
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

                    // setaction("Đăng nhập");
                    window.location.reload();
                }
            }
        }
    }
    return (
        <Container className="z-index-sticky">
            <section>
                <Container className=" min-vh-100 "  >
                    <Row style={{ backgroundColor: 'red' }}>
                        <Col xl={4} lg={6} md={7} className='d-lg-flex d-none h-100 my-auto position-absolute top-2 justify-content-center flex-column' style={{ paddingLeft: '5rem' }}>
                            <Card className="card-plain"> {/* Apply the custom gradient class */}
                                <Card.Header className="pb-0 text-left bg-white" style={{ borderBottom: 'none' }}>
                                    <h4 className="fw-bold">{action}</h4>
                                    {action === "Đăng nhập" ? <p className="mb-0 text-muted">Nhập email và mật khẩu để Đăng nhập</p> : <p className="mb-0 text-muted">Nhập thông tin để Đăng Ký</p>}
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        {action === "Đăng ký" ? <Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" name='username' placeholder="Họ và tên" aria-label="Name" aria-describedby="name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="number" name='userphone' placeholder="Số điện thoại" aria-label="Phone" aria-describedby="phone" />
                                            </Form.Group></Form.Group> : <Form.Group></Form.Group>}

                                        <Form.Group className="mb-3">
                                            <Form.Control type="email" name='userid' placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={(e) => { setuserId(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="password" name='pw' placeholder="Mật khẩu" aria-label="Password" aria-describedby="password-addon" onChange={(e) => { setpassword(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Check type="switch" id="rememberMe" label="Remember me" className="mb-3" />
                                        <div className="text-center">
                                            <Button id='btnSignin' type="button" className="btn btn-lg btn-lg w-100 mt-4 mb-0" style={{ background: 'linear-gradient(90deg, #4F44FF 0%, #A892FF 100%)' }} onClick={(e) => handleSubmit(e)}>{action}</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                                <Card.Footer className="text-center pt-0 px-lg-2 px-1 bg-white" style={{ borderTop: 'none' }}>
                                    {action === "Đăng nhập" ? (
                                        <>
                                            <div className="d-flex justify-content-center">
                                                <p className="mb-4 my-center">Chưa có tài khoản? </p>
                                                <p className="text-primary " style={{ cursor: 'pointer' }} onClick={() => { setaction("Đăng ký") }}>Đăng ký</p>
                                            </div>
                                        </>
                                    ) : null}
                                    {action === "Đăng ký" ? (
                                        <>
                                            <div className="d-flex justify-content-center">
                                                <p className="mb-4 text-sm">Đã có tài khoản?</p>
                                                <p className="text-primary" style={{ cursor: 'pointer' }} onClick={() => { setaction("Đăng nhập") }}>Đăng nhập</p>
                                            </div>
                                        </>
                                    ) : null}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={6} className="d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-2 end-0 text-center justify-content-center flex-column " style={{ paddingLeft: '2px' }}>
                            <div className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ background: 'linear-gradient(90deg, #4F44FF 0%, #A892FF 100%)', borderRadius: '2rem' }}>
                                <div className="position-relative">
                                    <Image className="col-9" src={chatimg} />
                                </div>
                                <h4 className="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
                                <p className="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
}
