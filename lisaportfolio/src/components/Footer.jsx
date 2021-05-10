import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Social from './Social';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 128px 39px 128px;
    height: auto;
    flex-wrap: wrap;
    
    ul {
        margin:auto;
        }
    @media (max-width: 1200px) {
        #logo {
            display: none;
        }
    }
    @media (max-width: 1058px) {
        ul {
        order: 1;
        width: 100%;
        justify-content: center;
        }
    }
    @media (max-width: 576px) {
        padding: 0px 16px 24px 32px;
    }
`;

const TextContainer = styled.p`
    display: inline-block;
    margin:auto;

    span {
        display:inline-block;
    }
    @media (max-width: 1058px) {
        padding-top: 24px;
        order: 2;
        width: 100%;
        text-align: center;
    }

`;

const Footer = () => {
    return ( 
        
        <FooterContainer>

            <Logo/>
            <TextContainer className="body-1">Hecho con <span className="heart-icon"></span> de Elisa. Copyright 2021 - Todos los derechos reservados.</TextContainer>
            <Social/>

        </FooterContainer>
     );
}

export default Footer;