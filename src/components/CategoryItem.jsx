import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        height: '30vh'
    })}
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #80808040;
    transition: 0.3s ease;
    text-align: center;
    
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #ffffff6a;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.3s ease;
    &:hover {
        transform: scale(1.1);
        background-color: #ffffffac;
        text-shadow: 2px 1px 1px black;
    }
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover ${Info} {
        background-color: transparent;
    }
    
    

    
`





const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`



export default CategoryItem