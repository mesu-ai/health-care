import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WorkHour from '../workhour/WorkHour';
import './Footer.css';

const Footer = () => {
    return (
       
        <div className="footer">
        <Container className="">

            
            <section className="row ">


            <Col className="quick-link text-lg-start col-lg-2 col-12 ">
                
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/home">Home</Link>
                    <Link to="">Check Shedule</Link>
                    <Link to="">Doctor Appointment</Link>
                    <Link to="">Ambullance Call</Link>
                    <Link to="">Rutine Check Up</Link>
                    
                    <Link to="/register">
                        <Button className="btn btn-danger mt-4">Register Now</Button>
                    </Link>
                    
                    
                </Nav>
                
            </Col>

            <Col className="col col-lg-5 col-md-6 mx-lg-4 px-lg-4 my-lg-0 my-5 outdoor-shedule">
            <h3 className="text-danger fw-bold">Out-Door Shedules</h3>

            <WorkHour></WorkHour>
            
            </Col>



            <Col className="col col-lg-4 col-md-6 col-12 my-lg-0 my-md-5">
                  
                  <h3>0-800-777-2331</h3>
                  
                  <div className="d-flex">
                  <i class="fas fa-mobile-alt text-danger fa-4x"></i>
                  <div className="text-lg-start ms-4">
                  <h5>24/7 EMERGENCY NUMBER</h5>
                  <p className="em-status">
                    Call us now if you need any medical emergency need.
                  </p>
                  </div>
                  </div>
                                
            </Col>  


            </section>

            <hr />
            <section className="row row-cols-2 mt-5 copywrite-section ">

                <Col className="text-lg-start fs-5 px-0 fw-bold"><p>&copy; 2021 Heart Care Foundation.</p>  </Col>
                
                <Col className="social-icon text-lg-end">
                <i className="fab fa-facebook-square fa-3x  text-primary"></i>
                <i className="fab fa-linkedin fa-3x text-primary mx-2"></i> 
                <i class="fab fa-twitter-square fa-3x text-info"></i>
                </Col>
        
            </section>


        </Container>

        </div>
    );
};

export default Footer;