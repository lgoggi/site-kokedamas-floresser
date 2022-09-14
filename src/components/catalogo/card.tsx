import Link from "next/link"
import { CardProps } from "types/api"
import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #8B7623;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 0.95rem;
margin-top: 2rem;
margin-left: 3rem;
margin-bottom: 2rem;
padding: 1%;
border-radius: 4px;
height: 30rem;
width: 21.5rem;
`

export const Icon = styled.img`
height: 30rem;
width: 21.5rem;
`

export const Nome = styled.h1`
font-size: 3rem;
font-family: "fontspring";
text-align: center;
`

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