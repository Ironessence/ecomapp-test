import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Title>Category</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>Black</Option>
                <Option>White</Option>
                <Option>Brown</Option>
                <Option>Gray</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>72</Option>
                <Option>78</Option>
                <Option>84</Option>
                <Option>90</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(desc)</Option>
                
            </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({
        margin: '0px 20px', display: 'flex', flexDirection: 'column',
    })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-right: 20px;
    ${mobile({
        marginRight: '50px'
    })}

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    font-size: 16px;
    ${mobile({
        margin: '5px 0px'
    })}
`

const Option = styled.option`
    padding: 20px;
    font-size: 16px;
    
`


export default ProductList