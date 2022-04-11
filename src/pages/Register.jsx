import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='E-mail Address'/>
                <Input placeholder='Username'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Agreement>
                By registering, I am agreeing to the <b>Terms and Conditions</b>
                </Agreement>
                <Button>REGISTER</Button>
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
        url(https://images.unsplash.com/photo-1575260279086-4d6bd9efcbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center no-repeat;
        background-color: gray;
        background-size: cover;
    
`

const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    background-color: white;
    border-radius: 20px;
    ${mobile({
        width: '75%'
    })}
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
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
    
`

export default Register