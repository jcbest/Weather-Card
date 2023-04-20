import styled from "@emotion/styled";
import React from "react";

const Icon = props => {

    var icon ='';
    switch(props.condition){
    case "cloudy":
    icon=`./images/cloudy.webp`;
    break;
    case "clear":
    icon=`./images/sunny.webp`;
    break;
    case "raining":
    icon=`./images/raining.webp`;
    break;
default:
    icon=`./images/raining.webp`;
    break;
    }

    
    const Icon = styled.img`
        width: 100px;
    
    `
    return ( 
        <Icon className='icon' src={icon} alt='Weather Icon'/>
           
     );
}
 
export default Icon;