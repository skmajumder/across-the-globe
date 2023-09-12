/* eslint-disable react/prop-types */
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImg from "./../../public/login.svg";
import { useContext, useState } from "react";
import SocialAccount from "./SocialAccount";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const CreateAccountModal = ({ show, onHide, onShowCreateAccountModal }) => {

    const { signUp, logout } = useContext(AuthContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // * Update the user Name & Set user Photo
    const updateUserInformation = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: `${errorMessage}`,
                });
            });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || !confirmPassword) return;
        if (password !== confirmPassword) return;

        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const name = `${firstName} ${lastName}`
                updateUserInformation(user, name)
                Swal.fire(
                    'Good Job!',
                    'User Create successfully. Now Please Login',
                    'success'
                )
                setFirstName('')
                setLastName('');
                setEmail('')
                setPassword('')
                setConfirmPassword('');
                logout();
                onShowCreateAccountModal(false);
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
                                <h2 className="fw-bold mb-4">Create Account</h2>
                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div className="d-flex">
                                        <input type="text" name="first-name" className="w-50 signup-field" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                                        <input type="text" name="last-name" className="w-50 signup-field" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
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
                                    <div>
                                        <input type="password" name="confirm-password" className="w-100 signup-field" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary w-100 rounded-pill">Create Account</button>
                                    </div>
                                </form>
                                <SocialAccount />
                            </Col>
                            <Col lg="6" className="position-relative">
                                <p className="mb-4 text-end mb-5">Already have an account? Sign In</p>
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

export default CreateAccountModal;
