import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EnquiryFormModal = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted:', { name, email, phone });
        // Close the modal
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Enquiry Now</Modal.Title>
            </Modal.Header>
            <div className='banner_form mb-xl-5 d-none d-md-block wow fadeInUp rounded-3'>
                                    <div className='loader' id="loader1"></div>
                                    <form>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <input type="text" name="Name" id="last_name" placeholder="Name*" class="form-control" required="" />
                                        </div>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <input type="email" name="Email" id="email" placeholder="Email*" class="form-control" required="" />
                                        </div>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <select required="" name="budget" id="budget" class="form-control" style={{ appearance: 'revert' }}>
                                                <option value=""> The Budget Range You're Looking For?</option>
                                                <option value="3.69 Cr* Onwards ">3.69 Cr* Onwards </option>
                                                <option value="4Cr* Onwards ">4Cr* Onwards </option>
                                                <option value="Above 4.5 Cr* ">Above 4.5 Cr* </option>
                                            </select>
                                        </div>
                                        <div className='form-group mb-2 mb-lg-3'>
                                            <input type="tel" name="Phone" id="number" placeholder="Enter Phone Number" class="form-control" pattern="^[6-9][0-9]{9}$" required="" autocomplete="off" />

                                        </div>
                                        <button class="btn w-100 btn-txt" type="submit" name="submit" id="submitBtn1">Submit</button>
                                    </form>
                                </div>
        </Modal>
    );
};

export default EnquiryFormModal;
