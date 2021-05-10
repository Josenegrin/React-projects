import React from 'react';
import Social from './Social';
import styled from '@emotion/styled';
import Elisa from '../assets/img/elisa.png';
import Elisamobile from '../assets/img/elisa-mobile.png';


const TextContainer = styled.div`
    padding-top: 83px;
    width: 543px;
    box-sizing: border-box;
    p {
        display: inline;
    }

    ul{
        padding-inline-start: inherit;
    }
    
`;
const TittleContainer = styled.div`
    width: 100%;
    h3 {
        margin: 0px;
    }
    h2 {
        margin: 0px;
    }
`;
const MainContainer = styled.div`
    display: flex;
    padding: 0px 128px 0px 128px;
    justify-content: space-between;
    box-sizing: border-box;
    p {
        width: 449px;
    }
    @media (max-width: 1300px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 992px) {
        padding: 16px 16px 40px 16px;
    }
    @media (max-width: 360px) {
        width: 328px;
    }
`;
const ImageContainer = styled.div`
    background-image: url('${Elisa}');
    background-repeat: no-repeat;
    background-position: center;
    width: 604px;
    height: 611.48px;
    left: 634px;
    top: 64px;
    @media (max-width: 992px) {
        background-image: url('${Elisamobile}');
        width: 327.95px;
        height: 337px;

    }
`;

const MainSection = () => {
    return ( 

        <MainContainer id="inicio">
            <TextContainer>
                <TittleContainer>
                    <h3>¡Hola a todos!</h3>
                    <h2>Soy Elisa</h2>
                </TittleContainer>
                <p className="body-1">Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
                <Social/>
            </TextContainer>
            <ImageContainer>
            </ImageContainer>
        </MainContainer>

     );
}
 
export default MainSection;