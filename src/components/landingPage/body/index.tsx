import styled from "styled-components";

import MainContent from "../MainContent";

const Wrapper = styled.div`
    background-image: linear-gradient(#7a6d27, #7a6d27, #fff1da, #fff1da); //make smooth round edges 
    display: flex;
    flex-direction: row;
`

const Block1 = styled.div`
    width: 25vw;
    height: 90vh;
    background-color: #7a6d27;
    border-bottom-left-radius: 100px;
    @media screen and (max-width: 1280px){
        display: none;
    }
`
const Block2 = styled.div`
    width: 75vw;
    height: 85vh;
    background-color: #fff1da;
    border-top-right-radius: 100px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1280px){
        width: 100vw;
    }
`

const Image = styled.img`
    width: 25vw;
    justify-self: center;
    align-self: center;
    transform: scaleX(-1);
    @media screen and (max-width: 1280px){
        display: none;
    }
`

const Body = () => 
    <>
    <Wrapper>
        <Block2>
            <MainContent/>
        </Block2>
        <Block1>
            <Image src={`https://floresser-api.herokuapp.com/uploads/FLORESSER_1_5948b1db48_88117e9cf8.png?updated_at=2022-10-12T23:47:30.443Z`}/>
        </Block1>
    </Wrapper>
    </>

export default Body