import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="m-5">
        <Form className="container text-start m-5 w-50 mx-auto border rounded-3 p-4 mt-3">
            <Form.Group className="mb-3" controlId="formGrouptText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3"             controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="d-flex justify-content-center">
            <Button className="btn btn-primary px-4 fw-bold" type="submit">Register</Button>

            </div>
           
        </Form>

        <Link to='/login'>
        <button style={{backgroundColor:"#f0c14b",padding:'5px 10px',borderRadius:'5px'}} className="fw-bold m-2">Already Hava An Account ?</button>
        </Link>


        <p >--------------------or--------------------</p>

        <button className="btn btn-info  mt-4">
        <i className="fab fa-google text-danger"></i> Google Sign In
        </button>

    
       </div>
        
    );
};

export default Register;