import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;
const Logo = styled.img`
    height: 80px;
    `;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 30px;
    cursor: pointer;
`;

const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Icons= styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

const Navbar = () => {
  return (
    <Section>
        <Wrapper>
            <Links>
            <Logo src='./img/nova9logo.png'/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Gallery</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src='./img/laser copy.png'/>
                <Button>Commission Now</Button>
            </Icons>
        </Wrapper>
    </Section>
  )
}

export default Navbar