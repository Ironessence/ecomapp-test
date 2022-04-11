import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Typhoon.</Logo>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam ut hic saepe eligendi fuga incidunt in ipsum earum dolorem. Doloremque ex saepe repellat, ipsa sequi amet eligendi blanditiis eveniet!</Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                <FacebookIcon />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <CenterTitle>Useful Links</CenterTitle>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Watches</ListItem>
                <ListItem>Women Watches</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <RightTitle>Contact</RightTitle>
                <ContactItem>
                    <LocationOnIcon style={{marginRight:'10px'}} />
                    529 Bellevue St., King's Landing, 23321
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:'10px'}}/>
                    +1 242 2422 232
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:'10px'}}/>
                    contact@typhoon.dev
                </ContactItem>
                <Payment src='https://i.ibb.co/N3rkYfj/Png-Item-479439.png' />
        </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: 'column'
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    ${mobile({
        textAlign: 'center'
    })}

`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
    ${mobile({
        justifyContent: 'center'
    })}
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`

const CenterTitle = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: '#f2f1f1'
    })}
`

const RightTitle = styled.h3`
    margin-bottom: 20px;
`

const ContactItem = styled.h3`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
`

const Payment = styled.img`
    width: 60%;
    ${mobile({
        marginLeft: '20%',
    })}

`

export default Footer