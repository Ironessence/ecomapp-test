import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import {mobile} from '../responsive';

const ProductPage = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
            <Image src='https://imagizer.imageshack.com/img924/2893/rkk9Rd.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Brolex Wata</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa molestias quia dolorem a saepe illum aliquam dolores qui voluptatibus reprehenderit. Dolorem, pariatur. Odit magni cupiditate excepturi suscipit quo laboriosam officiis!</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='pink'/>
                        <FilterColor color='darkblue'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>72</FilterSizeOption>
                            <FilterSizeOption>78</FilterSizeOption>
                            <FilterSizeOption>84</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: '10px', flexDirection: 'column'
    })}
`

const ImgContainer = styled.div`
    flex: 1;
    
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    ${mobile({
        width: '50%', marginLeft: '25%'
    })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: '10px'
    })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 200;
    font-size: 35px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({
        width: '100%'
    })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`
    padding: 10px;
    font-size: 16px;
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-evenly;
    ${mobile({
        width: '100%'
    })}
    
    
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    
`

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 8px;
    border: 2px solid teal;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    &:hover {
        background-color: #add8e631;
    }
`

export default ProductPage