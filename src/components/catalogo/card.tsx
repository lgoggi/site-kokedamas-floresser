import Link from "next/link"
import { CardProps } from "types/api"
import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #fff4d4;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 0.95rem;
margin-top: 2rem;
margin-left: 3rem;
margin-bottom: 2rem;
padding: 1%;
border-radius: 4px;
border: 1px solid grey;
aspect-ratio: 2/3;
height: 45rem;
cursor: pointer;
`

export const Icon = styled.img`
border-radius: 50%;
aspect-ratio: 1;
`

export const Nome = styled.h1`
font-size: 3rem;
font-family: "fontspring";
font-weight: 400;
text-align: center;
`

//estilo provisório
type Props = {
    content: CardProps
}

const Card = (content: Props) => 
<Wrapper>
    <Link href={`/catalogo/${content.content.id}`}>
        <Icon src={`http://localhost:1337${content.content.attributes.photo.data.attributes.url}`}/>
    </Link>
    <Nome>{content.content.attributes.nome}</Nome>
</Wrapper>

export default Card