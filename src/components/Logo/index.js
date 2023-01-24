import React from "react";
import logo from './../../logo.svg';
import { LogoContainer, LogoText, ReactConfLogo } from "./logo.styled";

function Logo(){

    return (
        <LogoContainer>
             <ReactConfLogo src={logo}  alt="logo" /> 
             <LogoText>React Macedonia by IWC</LogoText>
        </LogoContainer>
    )
}

export default Logo;