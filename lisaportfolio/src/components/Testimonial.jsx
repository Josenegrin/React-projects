import React from 'react';
import styled from '@emotion/styled';


const TestimonialContainer = styled.div`
    margin: 80px 117px;
    background-color: rgba(255, 255, 255, 0.2);
    border-style: inner;
    border-width: 4px;
    border-radius: 24px;
    box-sizing: border-box;
    
    

    @media (max-width: 768px) {
        margin: 40px 16px;
    }
`;

const TextImageContainer = styled.div`
    padding: 80px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border: 4px;
    border-style: outset none none outset;
    border-radius: 24px;
    border-color: rgba(255, 255, 255, 0.2);
    

    @media (max-width: 1200px) {
        margin: 0px;
        padding: 24px;
    }

    &:after {
        position: absolute;
        top: -4px; bottom: -4px;
        left: -4px; right: -4px;
        background: linear-gradient(red, blue);
        content: '';
        z-index: -1;
        border-radius: 16px;
    }
`;

const ImageContainer = styled.div`

    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 80px;
    margin: auto;
    @media (max-width: 360px) {
        width: 64px;
        height: 64px;
    }

`;

const TextContainer = styled.div`
    text-align: center;
    margin: auto;
    h5 {
        opacity: 0.5;
    }
    @media (max-width: 768px) {

        h4{
            font-size: 16px;
            line-height: 25.89px;
            letter-spacing: 0.5%;
        }
        h5{
            font-size: 12px;
            font-weight: 400;
            line-height: 19.42px;
            letter-spacing: 0.4px;
        }
    }
`;


const Testimonial = ({alt, src, text, subtext}) => {


    return ( 
        <TestimonialContainer>
            <TextImageContainer>
            
                <ImageContainer>
                    <img alt={alt} src={src}/>
                </ImageContainer>
                <TextContainer>
                    <h4>{text}</h4>
            
                    <h5>{subtext}</h5>

                </TextContainer>
            </TextImageContainer>
        </TestimonialContainer>

     );
}
 
export default Testimonial;