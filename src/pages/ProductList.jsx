import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { SettingsBackupRestore } from '@mui/icons-material';

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    
  return (
    <Container>
        <Navbar />
        <Title>Category</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name='color' onChange={handleFilters}>
                <Option disabled selected>Color</Option>
                <Option>Black</Option>
                <Option>White</Option>
                <Option>Brown</Option>
                <Option>Gray</Option>
            </Select>
            <Select name='size' onChange={handleFilters}>
                <Option disabled selected>Size</Option>
                <Option>72</Option>
                <Option>78</Option>
                <Option>84</Option>
                <Option>90</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e => setSort(e.target.value)}>
                <Option value='newest'>Newest</Option>
                <Option value='asc'>Price(asc)</Option>
                <Option value='desc'>Price(desc)</Option>
                
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
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