import { Dispatch, SetStateAction} from 'react'
import styled from "styled-components"

const TopBar_wrapper = styled.div`
width: 80rem;
height: 5rem;
background-color: rgba(1,1,1, 0.1);
border: 1px solid darkgrey;
border-radius: 25px;
display: flex;
align-items: center;
padding: 0rem 0rem 0 3rem;
`
const Search = styled.input`
font-style: italic;
padding-left: 15px;
border-radius: 10px;
border: 1px solid darkgrey;
height: 3rem;
`

const Ordenar = styled.select`
display: flex;
margin-left: auto;
margin-right: 5rem;
`

type Props = {
    setSearch: Dispatch<SetStateAction<string>>
    ordem: string
    setOrdem: Dispatch<SetStateAction<string>>
}

const TopBar = ({setSearch, ordem, setOrdem}: Props) =>
        <TopBar_wrapper>
            <Search 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Pesquisa'
            />
            <Ordenar value={ordem} onChange={(e)=> setOrdem(e.target.value)}>
                <option value={'nome'}>nome</option>
                <option value={'ID'} >ID</option>
            </Ordenar>
        </TopBar_wrapper>


export default TopBar

