import Link from "next/link"
import React from "react"
import { Icon } from '@iconify/react';

import styled from 'styled-components';

export const ButtonNav = styled.button`
font-family: 'Glora Black';
display: flex;
align-items: center;
justify-content: center;
margin: 5rem;
font-size: 2.5rem;
width: 20rem;
height: 4rem;
background-color: #D9D9D9;
border: 1px solid darkgrey;
cursor: pointer;
box-shadow: 3px 3px 3px 0px lightgrey;
&:active{
  transform: translate(3px, 3px);
  box-shadow: none;
}
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 10rem;
align-self: center;
justify-self: center;
`


const Buttons = () =>
    <Wrapper>
        <Link href="/"><ButtonNav><Icon icon="fa:home"/>home</ButtonNav></Link>
        <Link href="/contato"><ButtonNav><Icon icon="material-symbols:perm-contact-calendar"/>contato</ButtonNav></Link>
    </Wrapper>

export default Buttons