import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../hooks/useService';
import AllService from '../service/AllService';

const AllServices = () => {
    const [services]= useService();


    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
               {services.map(service=>
                   <AllService service={service}  key={Math.random()} >
                       
                   </AllService>
               )}
            </Row> 

            

        </Container>
    );
};

export default AllServices;