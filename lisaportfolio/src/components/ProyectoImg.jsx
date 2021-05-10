import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ImageContainer = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    #ImgMobile {
        display: none;
    }
    @media (max-width: 1142px) {
     order:1;   
     #ImgDesktop {
         display: none;
     }
     #ImgMobile {
        display: inline-block;
        padding-bottom: 44px;
    }
    }
`;



const ProyectoImg = ({desktopalt, mobilealt, desktopsrc, mobilesrc}) => {
    return ( 
        <Fragment>
            <ImageContainer>
                <img id="ImgDesktop"alt={desktopalt} src={desktopsrc}/>
            </ImageContainer>
            <ImageContainer>
                <img id="ImgMobile"alt={mobilealt} src={mobilesrc}/>
            </ImageContainer>
        </Fragment>

     );
}
 
ProyectoImg.propTypes = {
    desktopalt: PropTypes.string.isRequired,
    mobilealt: PropTypes.string.isRequired,
    desktopsrc: PropTypes.string.isRequired,
    mobilesrc: PropTypes.string.isRequired
}

export default ProyectoImg;