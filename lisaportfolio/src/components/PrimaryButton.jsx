import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({text, link}) => {
    return ( 

        <button className="primary-button" href={link}>{text}</button>
        
     );
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default PrimaryButton;