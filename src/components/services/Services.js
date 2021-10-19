
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../hooks/useService';
import Service from '../service/Service';


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