/* eslint-disable react/prop-types */
import { Col, Container, Modal, Row } from "react-bootstrap";

const CreateAccountModal = ({ show, onHide }) => {
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
                                <h2>Create Account</h2>
                            </Col>
                            <Col lg="6">2 of 6</Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>


    );
};

export default CreateAccountModal;
