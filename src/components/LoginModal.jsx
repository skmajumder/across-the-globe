/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

const LoginModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Add your login form fields and logic here */}
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
