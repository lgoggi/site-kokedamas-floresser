import client from "graphql/client";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

import GET_CATALOGO from "graphql/queries/getCatalogo";
import { CatalogoProps } from "types/api";


import Letter from "components/catalogo/letter";
import TopBar from "components/catalogo/topBar";
import RightBox from "components/catalogo/rightBox";
import Buttons from "components/landingPage/buttons";


const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`

const index = ({cards}: CatalogoProps) => {
  const [ search, setSearch ] = useState('')
  const [ CardList, setCardList ] = useState(cards.data)
  const [ ordem, setOrdem ] = useState('nome')


  
 useEffect(() => { //handles search
    let newCards = cards.data.filter((f) => f.attributes.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setCardList(newCards)
  }, [search])



  return (
    <>
      <Buttons/>
    <Wrapper>
      <Letter/>
      <TopBar setSearch={setSearch} ordem={ordem} setOrdem={setOrdem}/>
      <RightBox CardList={CardList} setCardList={setCardList} ordem={ordem}/>
    </Wrapper>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const catalogo = await client.request(GET_CATALOGO)
    .then(data => {
      return data
      }
    )


  return {
    props: {...catalogo}
  }
}
export default index;