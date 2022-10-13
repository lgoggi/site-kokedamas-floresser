import Link from "next/link"
import React from "react"
import { Icon } from '@iconify/react';

import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
min-width: 100vw;
height: 10vh;
align-self: center;
justify-self: center;
background-color: #7a6d27;
border-bottom-left-radius: 66px;
`

export const ButtonNav = styled.button`
font-family: 'Glora Black';
display: flex;
align-items: center;
justify-content: center;
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
@media screen and (max-width: 710px){
  width: 10rem;
  .texto{
    display: none;
  }
  }
`



const Buttons = () =>
    <Wrapper>
        <Link href="/"><ButtonNav><Icon className="icon" icon="fa:home"/><div className="texto">home</div></ButtonNav></Link>
        <Link href="/catalogo"><ButtonNav><Icon className="icon" icon="carbon:catalog"/><div className="texto">catalogo</div></ButtonNav></Link>
        <Link href="/contato"><ButtonNav><Icon className="icon" icon="material-symbols:perm-contact-calendar"/><div className="texto">contato</div></ButtonNav></Link>
    </Wrapper>

export default Buttons