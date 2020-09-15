
import React from 'react';

const Loader = props => {
    const randomLoaderClass = () => `loader${Math.floor(Math.random()*4+1)}` 
    
    return (
    
         <div className={`box ${randomLoaderClass()}`}></div> 

    );
}

export default Loader;