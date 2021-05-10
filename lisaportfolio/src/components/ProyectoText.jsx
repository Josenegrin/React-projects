import React from 'react';
import styled from '@emotion/styled';
import PrymaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import PropTypes from 'prop-types';

const TextButtonContainer = styled.div`
    width: 449px;
    padding-right: 24px;
    @media (max-width: 1142px) {
        order: 2;
    }
    @media (max-width: 1060px) {
        padding-right: 0px;
    }
    @media (max-width: 768px) {

    }
`;
const ProyectosText = styled.div`
    
`;
const TittleContainer = styled.div`
    background-color: rgba(15, 10, 10, 1);
    box-shadow: -4px 4px 0px #FFFFFF;
    display: inline-block;
    h4{
        color: rgba(66, 226, 184, 1);
        margin: 0px;
        padding: 4px 8px;
    }
    @media (max-width: 768px) {
        h4 {
            font-size: 24px;
            line-height: 38.83px;
        }
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .primary-button {
        margin-right: 16px;
    }
    @media (max-width: 768px) {
        justify-content: center;
        .primary-button {
            margin-right: 0px;
            width:328px;
            order: 2;
        }
        .secondary-button {
            width: 328px;
            order: 1;
            margin-bottom: 16px;
        }
    }
`;



const ProyectoText = ({tittle, description, github,link}) => {
    return ( 

        <TextButtonContainer>

            <ProyectosText>
                <TittleContainer>
                    <h4>{tittle}</h4>
                </TittleContainer>
                <p className="body-1">{description}</p>
            </ProyectosText>

            <ButtonsContainer>
                <PrymaryButton
                    link={link}
                    text="Ver Proyectos"
                />
                <SecondaryButton
                    github={github}
                />
            </ButtonsContainer>

        </TextButtonContainer>

     );
}

ProyectoText.propTypes = {
    tittle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default ProyectoText;