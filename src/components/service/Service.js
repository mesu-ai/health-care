
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
        <Col>
            <Card style={{backgroundColor:'#f1f1f1'}} className="h-100 ">
                <Card.Img variant="top" src={picture} width="100%" height="200" />
                <Card.Body>
                <Card.Title className="text-danger">{title}</Card.Title>
               
                <Card.Text> <i className="fas fa-phone-square-alt fa-lg text-success"></i>  <span className="text-success">{call_for_appoinment}</span> </Card.Text>
                
                <Card.Text> Potential Cost: {potential_cost} </Card.Text>
                    
                
                <Button onClick={serviceHandele} className="btn btn-primary">See Details</Button>
                
               
                </Card.Body>
            </Card>
        </Col>
       
    );
};

export default Service;