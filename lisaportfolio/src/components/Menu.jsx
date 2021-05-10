import React from 'react';
import styled from '@emotion/styled';
import PrimaryButton from './PrimaryButton';

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const ButtonContainer = styled.div`
    padding-left: 155px;
    @media (max-width: 1200px) {
        padding-left: 50px;
    }
    @media (max-width: 992px) {
        padding-left: 20px;
    }
    @media (max-width: 576px) {

    }

`;

const MenuUl = styled.ul`
    display: flex;
    width: 299px;
    height: 23px;

    @media (max-width: 768px) {
        display:none;

    }

    `;


const MenuList = styled.li`
    list-style: none;
    padding-right: 40px;

    &:last-of-type {
        padding-right: 0px;
    }

`;


const MenuAnchor = styled.a`
    text-decoration: none;
    opacity: 0.5;
    &:active {
        opacity: 1;
    }
`;
const Menu = () => {
    return ( 
        <MenuContainer>
            <MenuUl>
                <MenuList><MenuAnchor className="button-text"href="#inicio">Hola</MenuAnchor></MenuList>
                <MenuList><MenuAnchor className="button-text"href="#proyectos">Proyectos</MenuAnchor></MenuList>
                <MenuList><MenuAnchor className="button-text"href="#hablemos">Hablemos</MenuAnchor></MenuList>
            </MenuUl>
            <ButtonContainer>
                <PrimaryButton
                    text="Descargar Currículum"
                    link="#"
                />
            </ButtonContainer>
        </MenuContainer>
        
     );
}
 
export default Menu 

