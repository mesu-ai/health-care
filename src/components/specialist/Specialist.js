import React from 'react';
import { Card } from 'react-bootstrap';

const Specialist = (props) => {
    const {specialist} = props;

    return (

        //doctor information
        <Card style={{backgroundColor:'wheat'}} className="col p-3 g-2 mx-1">
            <img className="mx-auto" src={specialist?.image} alt="" width="100" height="80" />
            <p className="fw-bold text-primary">{specialist?.name}</p>
            <i>{specialist?.specialties}</i>
            
        </Card>
    );
};

export default Specialist;