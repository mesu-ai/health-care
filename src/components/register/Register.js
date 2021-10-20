import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from "firebase/auth";
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// new user register page
const Register = () => {


   const [email,setEmail]= useState('');
   const [password,setPassword]=useState('');
   const [name,setName]=useState('');
   const [error,setError]=useState('');
   const [setUser]=useState({});

   const auth = getAuth();


    // get user name
    const handleName=(e)=>{
        setName(e.target.value);
        

    }
 
    // get user email
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        

    }

    // get user password
    const handlePassword=(e)=>{
        setPassword(e.target.value);


    }


    const handleRegistration=(e)=>{
       console.log(name,email,password);
       newUserRegistration(email,password);
       setError('');
       
    
        e.preventDefault();


    }


    // new user register with email and password
    const newUserRegistration=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            setUserName();

        }).catch(error=>{
            
            setError(error.message);
            // setError(error.code);

        })

    }

    // update user name
    const setUserName=()=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message);
            setError(error.code);
            
          });

    }

    
    useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user);

            }
            
        })


    },[auth, setUser]);



    return (
        <div className="m-5">
        
        <Form onSubmit={handleRegistration} className="container text-start m-5 w-50 mx-auto border rounded-3 p-4 mt-3">
           
            <Form.Group  className="mb-3" controlId="formGrouptText">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={handleName}  type="text" placeholder="Enter Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3"             controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold text-danger" controlId="">
                    <Form.Label> {error}</Form.Label>
                </Form.Group>

            <div className="d-flex justify-content-center">
            <Button className="btn btn-primary px-4 fw-bold" type="submit">Register</Button>

            </div>
           
        </Form>

        <Link to='/login'>
        <button style={{backgroundColor:"#f0c14b",padding:'5px 10px',borderRadius:'5px'}} className="fw-bold m-2">Already Hava An Account ?</button>
        </Link>


        <p className="text-danger fw-bold" >OR</p>

        <button className="btn btn-info  mt-4">
        <i className="fab fa-google text-danger"></i> Google Sign In
        </button>

    
       </div>
        
    );
};

export default Register;