import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SBContainer = styled.div`
    display: inline-block    
`;

const SecondaryButton = ({github}) => {
    return ( 
        <SBContainer>
            <button className="secondary-button" href={github}> <span className="github-icon"></span> Ver Código </button>
        </SBContainer>

     );
}

SecondaryButton.propTypes = {
    github: PropTypes.string.isRequired,
}

export default SecondaryButton;