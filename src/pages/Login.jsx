import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>LOG IN TO YOUR ACCOUNT</Title>
            <Form>
                
                <Input placeholder='Username'/>
                <Input placeholder='Password'/>
                
                
                <Button>LOG IN</Button>
                <Link>Forgot password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
        url(https://images.unsplash.com/photo-1565787731018-7da2d6561271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80) center no-repeat;
        background-color: gray;
        background-size: cover;
    
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    border-radius: 20px;
    ${mobile({
        width: '75%',
    })}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`



const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightblue;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    margin-bottom: 10px;
    
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`





export default Login