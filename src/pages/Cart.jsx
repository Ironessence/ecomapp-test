import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Title>Your Shopping Cart</Title>
            <Top>
            <TopButton>
                CONTINUE SHOPPING
            </TopButton>
            <TopText>
                <TopText1>Shopping Bag(2)</TopText1>
                <TopText1>Wishlist</TopText1>
            </TopText>
            <TopButton type='filled'>
                CHECKOUT
            </TopButton>
            </Top>
            <Bottom>
            <Info>
            <Product>
            <ProductDetails>
                <Image src='https://i.ibb.co/PMZQ0Xq/watch1.png'/>
                <Details>
                    <ProductName><b>Product:</b> ZRAPPLE 15</ProductName>
                    <ProductId><b>Product id:</b> 421412</ProductId>
                    <ProductColor color='black'/>
                    <ProductSize><b>Product size:</b> 72</ProductSize>
                </Details>
            </ProductDetails>
            <PriceDetails>
                <ProductAmountContainer>
                <Remove />
                    
                    <ProductAmount>2</ProductAmount>
                    <Add />
                </ProductAmountContainer>
                <ProductPrice>$189</ProductPrice>
            </PriceDetails>
            </Product>
            <Hr />
            <Product>
            <ProductDetails>
                <Image src='https://i.ibb.co/wsv01Pb/watch2.png'/>
                <Details>
                    <ProductName><b>Product:</b> Normal Boring Watch 2</ProductName>
                    <ProductId><b>Product id:</b> 234324</ProductId>
                    <ProductColor color='black'/>
                    <ProductSize><b>Product size:</b> 82</ProductSize>
                </Details>
            </ProductDetails>
            <PriceDetails>
                <ProductAmountContainer>
                <Remove />
                    
                    <ProductAmount>1</ProductAmount>
                    <Add />
                </ProductAmountContainer>
                <ProductPrice>$99</ProductPrice>
            </PriceDetails>
            </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal:</SummaryItemText>
                    <SummaryItemPrice>$259</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping:</SummaryItemText>
                    <SummaryItemPrice>$9.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Discount:</SummaryItemText>
                    <SummaryItemPrice>-$29.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryInput placeholder='Your Discount Code:' />
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText>Total:</SummaryItemText>
                    <SummaryItemPrice>$322.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: '10px'
    })}

`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column'
    })}
`

const TopText = styled.div`
    ${mobile({
        display: 'none'
    })}
`

const TopText1 = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Info = styled.div`
    flex: 3;
`



const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    ${mobile({
        flexDirection: 'column'
    })}
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    
`

const ProductId = styled.span`
    
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`
    
`

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
        margin: '20px 15px'
    })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;

`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 45vh;
`

const SummaryTitle = styled.h1`
    font-weight: 300;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '600'};
    font-size: ${props => props.type === 'total' && '25px'};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
`

const SummaryInput = styled.input`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    ::placeholder {
        padding-left: 7px;
    }
`



export default Cart