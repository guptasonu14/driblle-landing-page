import React from "react";
import { useSelector } from 'react-redux';

const HeroBanner =() =>{
    const heroContent = useSelector((state) => state.heroContent);
    
    return(
        <div>
            <h1>{heroContent.title}</h1>
            <p>{heroContent.subtitle}</p>

        </div>
    );
};

export default HeroBanner;