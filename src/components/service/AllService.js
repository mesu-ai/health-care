import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AllService = (props) => {
    const {id,title,picture,call_for_appoinment}= props.service;

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
                    
                
                <Button onClick={serviceHandele} className="btn btn-primary">See Details</Button>
                
               
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllService;