import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ceo from '../../image/ceo.png'
import './CEO.css';


const CEO = () => {
    return (

        //Heart-Care Foundation CEO info
        <Row style={{height:'',padding:'110px 0px'}} className="row row-cols-lg-2  row-cols-1 d-flex justify-content-between align-items-center container mx-auto px-0">
        
        <Col className="text-start" >
        <h1 className="about-text"> 
            <span className="text-danger fw-bold ">Great passion,
           </span> <br />
           for healing

        </h1>
        <p className="fs-5">Some up and coming trends are healthcare consolidation for independent healthcare centers that see a cut in unforeseen payouts. High deductible health plans are also expected to transpire along with a growth of independent practices.</p>

        <div className="mt-5">
        <p className="ceo-sign">C. Franklin</p>
        <h4 className="text-danger">CHASE FRANKLIN</h4>
        <p>Fonder & CEO</p>
        </div>
      
      </Col>

      <Col>
          <img className="img-fluid" src={ceo} alt="" />
      
      
      </Col>
       </Row>

    );
};

export default CEO;