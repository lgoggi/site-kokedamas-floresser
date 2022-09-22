import Card from 'components/catalogo/card'
import {CardProps} from 'types/api'
import styled from "styled-components"
import { Dispatch, SetStateAction } from 'react'

export const RightBox_wrapper = styled.div`
margin-left: 20rem;
margin-top: 3rem;
margin-bottom: 7.5rem;
display: flex;
flex: 0 0 auto;
flex-direction: row;
flex-wrap: wrap;
overflow: auto;
align-self: start;
background-color: rgba(1,1,1, 0.1);
border: 1px solid darkgrey;
border-radius: 10px;
width: 148rem;
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

    return (<RightBox_wrapper>
        {CardList.map((planta) => {
            return ( <Card content={planta} key={planta.id} />)
        })}
    </RightBox_wrapper>)
}

export default RightBox