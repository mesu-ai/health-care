import React, { createContext } from 'react';
import useService from '../hooks/useService';

export const DetailsContex=createContext();

const DetailsPeovider = ({children}) => {
    const [services,setServices] =useService();

   
    return (
        <DetailsContex.Provider value={[services]}>
          {children}
        </DetailsContex.Provider>
 
    );
};

export default DetailsPeovider;