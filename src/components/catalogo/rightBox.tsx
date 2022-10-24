import Card from 'components/catalogo/card'
import {CardProps} from 'types/api'
import styled from "styled-components"
import { Dispatch, SetStateAction } from 'react'

const RightBox_wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 1rem 0 1rem;
margin-top: 3rem;
margin-bottom: 7.5rem;
background-color: rgba(1,1,1, 0.1);
border: 1px solid darkgrey;
border-radius: 10px;
width: 80vw;
`
const Inner_wrapper = styled.div` // to do: improve wrap/aligment
display: flex;
flex-wrap: wrap;
background-color: green;
justify-content: space-evenly;

`



type Props = {
    CardList: CardProps[]
    setCardList: Dispatch<SetStateAction<CardProps[]>>
    ordem: string
}

const RightBox = ({ CardList, setCardList, ordem }: Props) => {

    switch (ordem) {
        case 'nome':
            setCardList(CardList.sort((a, b) => { return a.attributes.nome.localeCompare(b.attributes.nome) }))
            break;
        case 'ID':
            setCardList(CardList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)))
            break;
        default:
            break;
    }

    return (
        <RightBox_wrapper>
            <Inner_wrapper>
                {CardList.map((planta) => {
                    return ( <Card content={planta} key={planta.id} />)
                })}
            </Inner_wrapper>
        </RightBox_wrapper>
    )
}

export default RightBox