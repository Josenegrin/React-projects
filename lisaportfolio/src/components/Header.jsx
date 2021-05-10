import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Menu from './Menu';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 49px;
    align-items: center;
    padding: 32px 128px 0px 128px;
    justify-content: space-between;

    @media (max-width: 992px) {
        padding: 32px 50px 0px 50px;
    }
    @media (max-width: 576px) {
        padding: 16px;
    }
    @media (max-width: 768px) {
        
    }
    

`;
const Header = () => {
    return ( 
        <HeaderContainer>
            <Logo/>
            <Menu/>
        </HeaderContainer>

     );
}
 
export default Header;