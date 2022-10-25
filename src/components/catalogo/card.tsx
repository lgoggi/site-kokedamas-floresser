import Link from "next/link"
import { CardProps } from "types/api"
import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #fff4d4;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-size: 0.95rem;
margin: 2rem auto 2rem 3rem;
border-radius: 4px;
border: 1px solid grey;
width: 30rem;
height: 40rem;
max-width: 32.5vw;
max-height: 50vw;
cursor: pointer;

`

export const Icon = styled.img`
align-items: flex-start;
width: 30rem;
max-width: 32.5vw;
border-bottom: 1px solid grey;
`

export const Nome = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 1;
width: 30rem;
max-width: 32.5vw;
height: 10rem;
max-height: 12.5vw;
font-size: 3rem;
font-family: "fontspring";
font-weight: 400;
text-align: center;
@media screen and (max-width: 710px) {  
    font-size: 2.5rem;
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