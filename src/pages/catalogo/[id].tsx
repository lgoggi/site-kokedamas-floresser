import client from "graphql/client";
import { GetStaticPaths, GetStaticProps } from "next";

import GET_CATALOGO from "graphql/queries/getCatalogo";
import GET_CARD from "graphql/queries/getCard";
import { CardProps } from "types/api";

import MainBox from "components/SinglePage/MainBox";
import Buttons from "components/landingPage/buttons";
import Info from "components/landingPage/InfoBox";



type Props = { 
    card: {
        data: CardProps
    }  
}

const item = (card: Props) => {
return (
<>
    <Buttons/>
    <MainBox content={card.card.data}/>
    <Info/>
</>
)
}
   


export const getStaticPaths : GetStaticPaths = async () => { 
    const catalogo = await client.request(GET_CATALOGO)
    
    const paths = catalogo.cards.data.map ( (data: CardProps) => {
        return {
            params: { id: data.id}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    const card = await client.request(GET_CARD(id))

    return {
        props: {...card}
    }
}

export default item;