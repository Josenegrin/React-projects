import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ProyectoText from './ProyectoText';
import ProyectoImg from './ProyectoImg';
import Testimonial from './Testimonial';
import leonidas from '../assets/img/leonidas.png';
import jason from '../assets/img/jason.png';
import marco from '../assets/img/marco.png';
import mockupdesktop from '../assets/img/pc-mockup.png';
import mockupipad from '../assets/img/ipad-mockup.png';
import mockupiphone from '../assets/img/iphone-mockup.png';
import mobilemockupdesktop from '../assets/img/mobile-desktop-mockup.png';
import mobilemockupipad from '../assets/img/mobile-ipad-mockup.png';
import mobilemockupiphone from '../assets/img/mobile-iphone-mockup.png';


const ProyectContainer = styled.div`
    padding: 80px 113px 80px 128px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1142px) {
        flex-wrap: wrap;
        padding: 40px 16px;
    }
    @media (max-width: 476px) {
        padding: 40px 16px;
    }
`;


const ProyectosContainer = () => {
    return ( 
        <Fragment>

            <ProyectContainer id="proyectos">
                <ProyectoText
                    tittle='leonidasesteban.com'
                    description='Accede a más de 120 proyectos que te ayudarán a mejorar 
                    tus habilidades como desarrollador Front-End.'
                    github='#'
                    link='#'
                />
                <ProyectoImg
                    desktopalt='alt'
                    desktopsrc={mockupdesktop}
                    />
                <ProyectoImg
                    mobilealt='alt'
                    mobilesrc={mobilemockupdesktop}
                    />
            </ProyectContainer>
            <Testimonial
            alt = ''
            src = {leonidas}
            text = '"Elisa ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses ".'
            subtext = 'LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM'
            />
            <ProyectContainer>
                <ProyectoImg
                    desktopalt='alt'
                    desktopsrc={mockupipad}
                    />
                <ProyectoImg
                    mobilealt='alt'
                    mobilesrc={mobilemockupipad}
                    />
                <ProyectoText
                    tittle='Marvol'
                    description='Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.'
                    github='#'
                    link='#'
                />
            </ProyectContainer>
            <Testimonial
                alt = ''
                src = {jason}
                text = '"Elisa ha superado mis expectativas desde el diseño hasta el desarrollo".'
                subtext = 'JASON LOPEZ / COFUNDADOR Y CEO MARVOL'
            />
            <ProyectContainer>
                <ProyectoText
                    tittle='Netnet'
                    description='Películas y series ilimitadas y mucho más.
                    Disfruta donde quieras. Cancela cuando quieras.'
                    github='#'
                    link='#'
                />
                <ProyectoImg
                    desktopalt='alt'
                    desktopsrc={mockupiphone}
                    />
                <ProyectoImg
                    mobilealt='alt'
                    mobilesrc={mobilemockupiphone}
                    />
            </ProyectContainer>
            <Testimonial
                alt = ''
                src = {marco}
                text = '"Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos".'
                subtext = 'MARCO CORTEZ / NETNET'
            />
        </Fragment>
     );
}
 
export default ProyectosContainer;