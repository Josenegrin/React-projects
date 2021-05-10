import React from 'react';
import styled from '@emotion/styled';


const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 543px;
    margin: auto;
    padding-bottom: 80px;
        label {
            padding: 16px 0px 8px 16px;
            font-weight: bold;
            &:first-of-type {
                padding: 0px 0px 8px 16px;
            }
        }
        input {
            width: 100%;
            height: 50px;
            border: solid 1px rgba(133, 140, 148, 1);
            border-radius: 8px;
            padding-left: 16px;
            box-sizing: border-box;
        }
        textarea {
            width: 100%;
            height: 134px;
            border: solid 1px rgba(133, 140, 148, 1);
            border-radius: 8px;
            margin-bottom: 16px;
            padding-left: 16px;
            box-sizing: border-box;
        }
        button {
            padding-top: 16px;
            margin: auto;
            width: 100%;
        }
    @media (max-width: 768px) {
        width: 328px;
    }
`;

const Form = () => {
    return ( 

        <ContainerForm>
            <label className="body-1">Nombre Completo</label>
            <input
                type = "text"
                name = "name"
                id = "name"
                placeholder='Tu nombre'
                className="body-1"
                required
            />
            <label className="body-1">Correo Electrónico</label>
            <input
                type = "text"
                name = "email"
                id = "email"
                placeholder='Tu nombre'
                className="body-1"
                required
            />
            <label className="body-1">Mensaje</label>
            <textarea required></textarea>
            <button 
            type="submit"
            className="primary-button"
            
            >Enviar Mensaje</button>
        </ContainerForm>

     );
}
 
export default Form;