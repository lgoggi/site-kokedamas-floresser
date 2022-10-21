import Link from "next/link"
import { CardProps } from "types/api"
import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #fff4d4;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 0.95rem;
margin-top: 2rem;
margin-left: 3rem;
margin-right: 0;
margin-bottom: 2rem;
border-radius: 4px;
border: 1px solid grey;
width: 30rem;
height: 40rem;
max-width: 30vw;
max-height: 45vw;
cursor: pointer;
`

export const Icon = styled.img`
width: 25rem;
max-width: 25vw;
`

export const Nome = styled.h1`
font-size: 3rem;
font-family: "fontspring";
font-weight: 400;
text-align: center;
@media screen and (max-width: 710px) {  // You can change this breakpoint
    font-size: auto;
  }
`

//estilo provisório
type Props = {
    content: CardProps
}

const Card = (content: Props) => 
    <Link href={`/catalogo/${content?.content.id}`}>
<Wrapper>
        <Icon src={`${content?.content.attributes.photo.data.attributes.url}`}/>
    <Nome>{content?.content.attributes.nome}</Nome>
</Wrapper>
    </Link>

export default Card