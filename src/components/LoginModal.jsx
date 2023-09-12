/* eslint-disable react/prop-types */
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImg from "./../../public/login.svg";
import { useContext, useState } from "react";
import SocialAccount from "./SocialAccount";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const LoginModal = ({ show, onHide, onShowLoginModal }) => {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;

        // Login the user with email and password
        signIn(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                setEmail("");
                setPassword("");
                Swal.fire(
                    'Good Job!',
                    `${loggedUser.email} User Login successfully`,
                    'success'
                )
                onShowLoginModal(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: `${errorCode} ${errorMessage}`,
                });
            });
    }

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
                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div>
                                        <input type="email" name="email" className="w-100 signup-field" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="position-relative">
                                        <input type={passwordVisible ? "text" : "password"} minLength={6} name="password" className="w-100 signup-field" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
                                        <button type="submit" className="btn btn-primary w-100 rounded-pill">Sign In</button>
                                    </div>
                                </form>
                                <SocialAccount onModalOff={onShowLoginModal} />
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
