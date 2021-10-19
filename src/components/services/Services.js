import Button from '@restart/ui/esm/Button';
import React, { createContext, useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useDetails from '../../hooks/useDetails';
import useService from '../../hooks/useService';
import Service from '../service/Service';
import ServiceDetails from '../servicedetails/ServiceDetails';




const Services = () => {
   const [services]= useService();


    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
               {services.map(service=>
                   <Service service={service}  key={Math.random()} >
                       
                   </Service>
               )}
            </Row> 

            

        </Container>
    );
};

export default Services;