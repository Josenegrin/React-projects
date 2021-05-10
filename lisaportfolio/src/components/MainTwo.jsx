import React from 'react';
import styled from '@emotion/styled';

const MainTwoContainer = styled.div`
    padding: 200px 233px 200px 233px;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    @media (max-width: 1200px) {
    padding: 40px 16px;
    }
`;
const TextContainer = styled.div`
p {
    font-size: 34px;
    font-weight: 300;
    line-height: 55.01px;
    text-align: center;
    padding-bottom: 24px;
    margin: 0px;
}
h5 {
    padding-bottom: 24px;
    margin: 0px;
}
@media (max-width: 768px) {
    p   {
        font-size: 24px;
        font-weight: 400;
    }
    }
`;
const SocialButton = styled.div`
    display: inline-block;
    padding-right: 16px;
`;

const IconContainer = styled.a`
    text-align: center;
    width: 80.52px;
    height: 80.52px;
`;


const MainTwo = () => {
    return ( 
        <MainTwoContainer>
            <TextContainer>
            <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
            <h5>Aquí hay algunos que me gustaría compartir.</h5>
            
            <SocialButton>
                <IconContainer className="dl-icon"></IconContainer>
            </SocialButton>

            </TextContainer>
        </MainTwoContainer>
        

     );
}
 
export default MainTwo;

