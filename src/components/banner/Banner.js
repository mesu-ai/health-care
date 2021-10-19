import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heart from '../../image/heart.png'

const Banner = () => {
    return (
        <Row style={{height:'',padding:'110px 0px'}} className="row row-cols-lg-2  row-cols-1 d-flex justify-content-between align-items-center container mx-auto px-0">
        
      <Col className="text-start" >
        <h1 className="about-text"> 
            <span className="text-danger fw-bold ">Healthy heart,
           </span> <br />
           healthy family

        </h1>
        <p className="fs-5">We aim to make it easier and more convenient for you to get the help you need from specialist doctors, and consultants.We support 24/7 in any emergency. We are commited to your healthcare.</p>

        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 me-2">Discover More</button>
        
        <Link to='/services'>
        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 ms-2">View Our Services</button>
        </Link>
      
      </Col>

      <Col>
          <img className="img-fluid" src={heart} alt="" />
      
      
      </Col>
       </Row>

    );
};

export default Banner;