import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Elipse2 = styled.img`
    background-image: url('../assets/img-bg/Elipse2.svg');
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    left: -180px;
    top: 68px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse3 = styled.div`
    background-image: url('../assets/img-bg/Elipse3.svg');
    position: absolute;
    width: 400px;
    height: 400px;
    left: 377px;
    top: 544px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse4 = styled.div`
    background-image: url('../assets/img-bg/Elipse4.svg');
    position: absolute;
    width: 400px;
    height: 400px;
    left: 0px;
    top: 1524px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse5 = styled.div`
    background-image: url('../assets/img-bg/Elipse5.svg');
    position: absolute;
    width: 400px;
    height: 400px;
    left: 966px;
    top: 2459px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse6 = styled.div`
    background-image: url('../assets/img-bg/Elipse6.svg');
    position: absolute;
    width: 400px;
    height: 400px;
    left: -35px;
    top: 5235px;
`;

const Vector = styled.div`
    background-image: url('../assets/img-bg/Vector.svg');
    position: absolute;
    width: 960.01px;
    height: 777.99px;
    left: 777px;
    top: 1049px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Vector1 = styled.div`
    background-image: url('../assets/img-bg/Vector-1.svg');
    position: absolute;
    width: 960.01px;
    height: 777.99px;
    left: 742px;
    top: 4857px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Vector2 = styled.div`
    background-image: url('../assets/img-bg/Vector-2.svg');
    position: absolute;
    width: 960.01px;
    height: 777.99px;
    left: 577.01px;
    top: 2377px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const BackgroundForms = () => {
    return ( 
        <Fragment>
            <Elipse2></Elipse2>
            <Elipse3></Elipse3>
            <Elipse4> </Elipse4>
            <Elipse5> </Elipse5>
            <Elipse6> </Elipse6>
            <Vector> </Vector>
            <Vector1> </Vector1>
            <Vector2> </Vector2>
        </Fragment>

     );
}
 
export default BackgroundForms;