import React from 'react';
import styled from '@emotion/styled';

const SocialContainer = styled.ul`
    display: flex;
    flex-direction: row;
    width: 224px;
    height: 44px;
`;
const SocialButton = styled.li`
    list-style: none;
    padding-right: 16px;
`;

const IconContainer = styled.a`
    text-decoration: none;
    border: solid 2px rgba(15, 10, 10, 1);
    background-color: rgba(66, 226, 184, 1);
    border-radius: 4px;
    padding: 10px;
    text-align: center;
`;



const Social = () => {
    return ( 
        <SocialContainer>
            <SocialButton>
                <IconContainer className="phone-icon" href="#"></IconContainer>
            </SocialButton>

            <SocialButton>
                <IconContainer className="email-icon" href="#"></IconContainer>
            </SocialButton>

            <SocialButton>
                <IconContainer className="instagram-icon" href="#"></IconContainer>
            </SocialButton>

            <SocialButton>
                <IconContainer className="twitter-icon" href="#"></IconContainer>
            </SocialButton>




        </SocialContainer>
     );

}
 
export default Social;
