import React from 'react';
import Banner from '../banner/Banner';
import CEO from '../CEO/CEO';
import Contract from '../contract/Contract';
import Services from '../services/Services';


const Home = () => {
    return (
        <div>  
         
         <div style={{backgroundColor:'#d6d2d1'}}>
         <Banner></Banner>   
        </div>   
        
        <Services></Services>
        <CEO></CEO>

        <Contract></Contract>



        </div>
    );
};

export default Home;