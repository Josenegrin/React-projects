import React from 'react';
import styled from '@emotion/styled';
import Form from './Form';


const ContainerForm = styled.div`
    margin: auto;
`;



const TittleContainer = styled.div`
    background-color: rgba(15, 10, 10, 1);
    box-shadow: -4px 4px 0px #FFFFFF;
    

    h4{
        color: rgba(66, 226, 184, 1);
        margin: 0px;
        padding: 4px 8px;
        text-transform: uppercase;
    }
    h5{
        color: rgba(66, 226, 184, 1);
        margin: 0px;
        padding: 4px 8px;
        text-transform: uppercase;
        display: none;
    }
    
    @media (max-width: 768px) {
        width: 147px;
        text-align: start;

        h4{ 
            display: none;
        }
        h5{
            display: block;
            text-align: start;
        }
    }
`;
const ProyectosText = styled.div`
    text-align: center; 
    justify-content: center; 
    width: 543px;
    margin: auto;
    @media (max-width: 768px) {
        width: 328px;
    }
`;


const Contact = () => {
    return ( 
        <ContainerForm id="hablemos">        
            <ProyectosText>
                <TittleContainer>
                    <h4>Hablemos </h4>
                    <h5>Hablemos </h5>
                </TittleContainer>
                <p className="body-1">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
            </ProyectosText>
            <Form/>
        </ContainerForm>
     );
}
 
export default Contact;