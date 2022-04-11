import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { sliderItems } from '../data';
import { mobile } from '../responsive';



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowBackIosNewOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
            
            
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowForwardIosOutlinedIcon />
        </Arrow>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
        display: 'none'
    })}
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #eaeaea;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.2s ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
    
    

`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    
    
`

const Image = styled.img`
    height: 45%;
    

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    flex-grow: 1;
    
    
`

const Title = styled.h1`
    font-size: 50px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 1px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
`

export default Slider