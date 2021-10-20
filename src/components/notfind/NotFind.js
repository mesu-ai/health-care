import React from 'react';

const NotFind = () => {
    return (

        // if page not found then show this page
        <div style={{height:'500px'}} className="d-flex flex-column align-items-center justify-content-center">
            <h2 style={{color:'red'}}>Error 404 !</h2>
            <h4>Page Not Found.</h4>
            
        </div>
    );
};

export default NotFind;