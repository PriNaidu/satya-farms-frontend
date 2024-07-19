// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_DETAILS } from './constant';
import logo from '../../src/components/utils/assets/images/logo.jpg'
import callButton  from '../../src/components/utils/assets/images/call_btn_icon.svg'

const Header = () => {
    return (
        <header>
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#" aria-label="APR Hillside">
                            <img src={logo} className="img-fluid" alt="logo" />
                        </a>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="n"></span>
                            <span className="g"></span>
                            <span className="s"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                {
                                    HEADER_DETAILS.map((value) => (
                                        <li className="nav-item" key={value}>
                                            <a className="nav-link menu-link" href={`#${value.toLowerCase()}`}>
                                                {value}
                                            </a>
                                        </li>
                                    ))
                                }
                                <li className="nav-item d-none d-md-flex">
                                    <a href="tel:+919154981842 ">
                                        <button type="button" className="btn btn-rounded-3">
                                        <img src={callButton} className="img-fluid" alt="call" />


                                            9154981842
                                        </button>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-md-flex">
                                    <button type="button" className="btn btn-rounded-3" data-bs-toggle="modal" data-bs-target="#modalForm11">Enquire
                                        Now</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </header>
    );
};

export default Header;
