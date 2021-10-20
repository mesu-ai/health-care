import React from 'react';
import { Card } from 'react-bootstrap';
import './Specialist.css';

const Specialist = (props) => {
    const {specialist} = props;

    return (

        //doctor information
        <Card className="col p-3 g-2 mx-1 shadow-lg doctor-card">
            <img className="mx-auto" src={specialist?.image} alt="" width="100" height="80" />
            <p className="fw-bold doctor-name mt-3">{specialist?.name}</p>
            <i className="doctor-specialitis">{specialist?.specialties}</i>
            
        </Card>
    );
};

export default Specialist;