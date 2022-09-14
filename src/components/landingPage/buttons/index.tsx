import Link from "next/link"
import React from "react"

import styled from 'styled-components';

const ButtonNav = styled.button`
font-family: 'Glora Black';
display: flex;
justify-content: center;
margin: 5rem;
font-size: 2.5rem;
width: 20rem;
height: 4rem;
background-color: #D9D9D9;
border: 1px solid darkgrey;
cursor: pointer;
box-shadow: 5px 5px 5px 0px #131833;
&:active{
  transform: translate(5px, 5px);
  box-shadow: none;
}
`

const Wrapper = styled.div`
display: flex;
margin-top: 3rem;
margin-bottom: 6rem;
align-items: center;
justify-content: center;
width: 100vw;
height: 10rem;
}
`


const Buttons = () =>
    <Wrapper>
        <Link href="/"><ButtonNav>home</ButtonNav></Link>
        <Link href="/contato"><ButtonNav>contato</ButtonNav></Link>
    </Wrapper>

export default Buttons