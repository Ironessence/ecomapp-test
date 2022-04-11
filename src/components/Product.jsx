import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({item}) => {
  return (
    <Container>
        
        <Image src={item.img} />
        <Circle />
        <Title>{item.title}</Title>
        <Info>
            <Icon>
    <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
    <SearchOutlinedIcon />
            </Icon>
            <Icon>
    <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
        <Price>{'$' + item.price}</Price>
    </Container>
  )
}

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #51535421;
    
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.4s ease;
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: #add8e62a;
    border-radius: 50%;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f7f7a3;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
    
`



const Image = styled.img`
    width: 50%;
    height: 50%;
    z-index: 2;
    object-fit: contain;
    
    
`



const Icon = styled.div`
    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 0.4s ease;

    &:hover {
        background-color: white;
        transform: scale(1.2);
        
    }
`

const Title = styled.h1`
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 15px;
    color: white;
    text-shadow: 2px 2px 4px black;
    letter-spacing: 0.5px;
`

const Price = styled.h2`
    position: absolute;
    color: white;
    z-index: 5;
    bottom: 10px;
    text-shadow: 2px 2px 4px black;
    letter-spacing: 0.5px;
`

export default Product