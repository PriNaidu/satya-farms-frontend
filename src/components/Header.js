import React, { useState } from 'react';
import { HEADER_DETAILS } from './constant';
import logo from '../../src/components/utils/assets/images/logo.jpg';
import callButton from '../../src/components/utils/assets/images/call_btn_icon.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EnquiryFormModal from './ModalBox';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <div className="container">
                <Navbar.Brand href="#" aria-label="APR Hillside">
                    <img src={logo} className="img-fluid" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto mb-2 mb-lg-0 align-items-center">
                        {HEADER_DETAILS.map((value) => (
                            <Nav.Item key={value}>
                                <Nav.Link href={`#${value.toLowerCase()}`} className="menu-link">
                                    {value}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                        <Nav.Item className="d-none d-md-flex ">
                            <a href="tel:+919154981842" style={{border: "none" , marginLeft: "10px"}}>
                                <button type="button" className="btn btn-rounded-3" style={{ marginRight: '10px' }}>
                                    <img src={callButton} className="img-fluid " alt="call" />
                                    9154981842
                                </button>
                            </a>
                        </Nav.Item>
                        <Nav.Item className="d-none d-md-flex">
                            <button type="button" className="btn btn-rounded-3" data-bs-toggle="modal" data-bs-target="#modalForm11" style={{ marginLeft: '10px' }} onClick={toggleModal}>
                                Enquire Now
                            </button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
            <EnquiryFormModal show={showModal} onHide={toggleModal} />
        </Navbar>
    );
};

export default Header;

