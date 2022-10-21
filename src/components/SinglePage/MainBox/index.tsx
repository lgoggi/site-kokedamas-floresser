
import { Icon } from "@iconify/react"
import { useState } from "react"
import styled from "styled-components"
import { CardProps } from "types/api"


const Mainbox_wrapper = styled.div`
    margin: 10rem auto;
    width: 120rem;
    max-width: 90vw;
    height: 60rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: 1240px){
        margin: 5rem auto;
        width: 75rem;
        height: fit-content;
        flex-direction: column;
    }
`
const ImageBox = styled.div`
    background-color: #e3cb7d;
    border: 1px solid black;
    height: 60rem;
    width: 75rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (max-width: 820px){
        flex-direction: row;
        width: 60rem;
        height: 75rem;
        max-width: 80vw;
        max-height: 100vw;
    }
    `

const MainImg=styled.img`
    opacity: 100%;
    border: none;
    border-right: 1px solid black;
    width: 60rem;
    max-width: 80vw;
    max-height: 80vw;
    height: 60rem;
    margin: 0;
`
const SideImg = styled.img`
    border: 1px solid black;
    width: 10rem;
    height: 10rem;
    max-width: 15vw;
    max-height: 15vw;
    margin: 1rem 1rem 2rem 1rem;
    opacity: 80%;
`

const Info_wrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    border: 1px solid black;
    height: 57.5rem;
    width: 30rem;
    max-width: 80vw;
    background-color: #e3cb7d;
    .contato{
    font-family: 'Glora Black';
    font-size: 2rem;
    background-color: #8a6f16;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto 1.5rem auto;
    border: 2px black solid;
    height: 7.5rem;
    width: 18rem;
    font-weight: bold;
    @media screen and (max-width: 840px){
        font-size: 1.5rem; 
    }
}
    @media screen and (max-width: 1240px){
        padding: 0;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 20rem;
        width: 60rem;
        margin: 5rem auto;
        .contato{
            margin: auto;
            max-width: 30vw;
        }
        .texto{
            margin: auto;
            display: flex;
            flex-direction: column;
        }
    }
`
const Nome = styled.div`
    font-family: 'Glora Regular';
    font-size: 4.5rem;
    margin-left: 1.5rem;
`
const Tamanho = styled.div`
    font-family: "Glora Medium";
    font-size: 2.5rem;
    margin-left: 1.5rem;
`

const Contato = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


type Props ={
    content: CardProps
}

const MainBox = (content: Props) =>{
    const [MainImageIndex, setMainImageIndex] = useState(0)
    function mainImage(current: number){ //makes the select image the first child
        setMainImageIndex(current)
    }

    return (
        <Mainbox_wrapper>
        <ImageBox>
            <MainImg src={`${content.content.attributes.galeria.data[MainImageIndex].attributes.url}`} 
                    alt={content.content.attributes.galeria.data[MainImageIndex].attributes.alternativeText}/>
                {
            content.content.attributes.galeria.data.map((element,index)=>{
                return(
                    <SideImg src={`${element.attributes.url}`} 
                    alt={element.attributes.alternativeText} onClick={()=> {mainImage(index)}} key={`${element.id}`}/>
                )
            })}
        </ImageBox>
        <Info_wrapper>
            <div className="texto">
                <Nome>{content.content.attributes.nome}</Nome>
                <Tamanho>{content.content.attributes.tamanho}, {content.content.attributes.ambiente}</Tamanho>
            </div>
            <a className="contato" href='https://wa.me/' target="_blank" rel="noreferrer">
                <Contato><Icon icon='dashicons:whatsapp' width={25}/>ENCOMENDAR</Contato>
            </a>
        </Info_wrapper>
    </Mainbox_wrapper>
    )
}



export default MainBox