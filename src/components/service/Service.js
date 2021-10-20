import './Service.css';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const {id,title,picture,call_for_appoinment,potential_cost}= props.service;

   const history= useHistory();
   const url= `/service/${id}`;
    const serviceHandele=()=>{
        history.push(url);

    }

    return (

        // Home page service card
        <Col>
            <Card  className="h-100 service-card">
                <Card.Img variant="top" src={picture} width="100%" height="200" />
                <Card.Body>
                <Card.Title className="service-title">{title}</Card.Title>
               
                <Card.Text> <i className="fas fa-phone-square-alt fa-lg text-success"></i>  <span className="phone-number">{call_for_appoinment}</span> </Card.Text>
                
                <Card.Text className=" fs-5"> Potential Cost: $ <span className="service-cost">{potential_cost}</span>  </Card.Text>
                    
                
                <Button onClick={serviceHandele} className="btn btn-primary">Book An Appointment</Button>
                
               
                </Card.Body>
            </Card>
        </Col>
       
    );
};

export default Service;