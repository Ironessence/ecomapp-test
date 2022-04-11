import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { getRadioUtilityClass } from '@mui/material';
import {mobile} from '../responsive';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'></Input>
                    <SearchIcon style={{color: 'gray', fontSize: '14px'}}/>
                </SearchContainer>
                </Left>
            <Center>
            <Logo>Typhoon.</Logo>

            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color='primary'>
                    <ShoppingCartOutlinedIcon />
                </Badge>
                </MenuItem>
                
            </Right>
            </Wrapper>
            </Container>
  )
}



const Container = styled.div`
    height: 60px;

    ${mobile({
        height: '50px'
    })}
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        padding: '10px 0px'
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: 'none'
    })}

`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({
        width: '50px'
    })}
    
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '24px', marginLeft: '3px',
    })}

`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: 'center', flex: '2',
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px', marginLeft: '10px',
    })}
`

export default Navbar