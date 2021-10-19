import React from 'react';

const Specialist = (props) => {
    const {specialist} = props;

    return (
        <div className="col">
            <img src={specialist?.image} alt="" width="100" height="80" />
            <p className="fw-bold text-primary">{specialist?.name}</p>
            <i>{specialist?.specialties}</i>
            
        </div>
    );
};

export default Specialist;