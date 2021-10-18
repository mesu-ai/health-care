import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useService from '../../hooks/useService';
import Service from '../service/Service';

const Services = () => {
   const [services,setServices]= useService();
   const [details,setDetails]=useState([]);

//    const history= useHistory();

//    console.log(services);

//    const url='/servicedetails';
    const serviceHandeler=(id)=>{
        // history.push(url);

       



    }

    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
               {services.map(service=>
                   <Service service={service} serviceHandeler={serviceHandeler}  key={Math.random()} >
                       
                   </Service>
               )}
            </Row>  
        </Container>
    );
};

export default Services;