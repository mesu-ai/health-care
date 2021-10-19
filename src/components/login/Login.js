import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link,useHistory,useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle}=useAuth();

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    // const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoding,setLoding]=useState(true);
    

    const auth = getAuth();


   const history= useHistory();
   const location= useParams();

   const redirect_uri=location.state?.from || '/home';


    const handleLogin=()=>{
        setLoding(true);
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);

        }).finally(()=>{setLoding(false)});



    }

    const handleEmail=e=>{
        setEmail(e.target.value);

    }

    const handlePassword=e=>{
        setPassword(e.target.value);
    }

    const handleUserLogin=e=>{

        console.log(email,password);
        userLogin(email,password);
        
        e.preventDefault();


    }

    const userLogin=(email,password)=>{

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => { 
           
            history.push(redirect_uri);
            // setUser(result.user);
        })
        .catch((error) => {
            setError(error.massage);
            
        });


    }







    return (
           <div className="m-5">
            <Form onSubmit={handleUserLogin} className="container text-start m-5 w-50 mx-auto border rounded-3 p-4 mt-3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3"             controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <div className="d-flex justify-content-center">
                <Button className="btn btn-primary px-4 fw-bold" type="submit">Login</Button>

                </div>
               
            </Form>

            <Link to='/register'>
            <button style={{backgroundColor:"#f0c14b",padding:'5px 10px',borderRadius:'5px'}} className="fw-bold m-2">Create Your Account</button>
            </Link>


            <p >--------------------or--------------------</p>

            <button onClick={handleLogin} className="btn btn-info  mt-4">
            <i className="fab fa-google text-danger"></i> Google Sign In
                </button>

        
           </div>
            
    );
};

export default Login;