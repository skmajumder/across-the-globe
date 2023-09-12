/* eslint-disable react/prop-types */
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaFacebookSquare, FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImg from "./../../public/login.svg";
import { useState } from "react";

const LoginModal = ({ show, onHide }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Modal show={show} onHide={onHide} className="modal-xl">
                <Modal.Header closeButton className="modal-custom-header">
                    <Modal.Title className="fs-6">Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <h2 className="fw-bold mb-4">Login</h2>
                                <form className="signup-form">
                                    <div>
                                        <input type="email" name="email" className="w-100 signup-field" placeholder="Email" />
                                    </div>
                                    <div className="position-relative">
                                        <input type={passwordVisible ? "text" : "password"} name="password" className="w-100 signup-field" placeholder="Password" />
                                        {/* Show/hide password icon */}
                                        {passwordVisible ? (
                                            <FaEyeSlash
                                                className="password-toggle-icon"
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <FaEye
                                                className="password-toggle-icon"
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                    <div className="mt-4">
                                        <button type="button" className="btn btn-primary w-100 rounded-pill">Create Account</button>
                                    </div>
                                </form>
                                <div className="mt-4">
                                    <button className="w-100 social-login-btn mb-3">
                                        <FaFacebookSquare className="me-2" />
                                        Sign up with Facebook
                                    </button>
                                    <button className="w-100 social-login-btn">
                                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
                                        <span className="ms-2">Sign up with Facebook</span>
                                    </button>
                                </div>
                            </Col>
                            <Col lg="6" className="position-relative">
                                <p className="mb-4 text-end mb-5">Don’t have an account yet? Create new for free!</p>
                                <div className="text-center">
                                    <img src={LoginImg} alt="Login Animation" />
                                </div>
                                <p className="terms-and-conditions">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>


    );
};

export default LoginModal;
