import React from 'react';
import Banner from '../banner/Banner';
import CEO from '../CEO/CEO';
import Contract from '../contract/Contract';
import Services from '../services/Services';


const Home = () => {
    return (

        //Website Home Page 

        <div>  
         
         {/* homepage banner */}
         <div style={{backgroundColor:'#d6d2d1'}}>
         <Banner></Banner>   
        </div>   
        
        {/* service card show */}
        <Services></Services>

        {/* Foundation CEO info */}
        <CEO></CEO>

        {/* contract and other info */}
        <Contract></Contract>


        </div>
    );
};

export default Home;