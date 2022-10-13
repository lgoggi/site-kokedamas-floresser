import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
width: fit-content;
height: fit-content;
border-radius: 25px;
display: flex;
align-items: center;
flex-direction: column;
align-self: center;
justify-self: center;
 `
 
const Button = styled.button`
 font-family: 'Glora Black';
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 3.25rem;
 margin-top: 1rem;
 width: 25rem;
 height: 7.5rem;
 border: 3px solid black;
 cursor: pointer;
 box-shadow: 5px 5px 5px 0px #131833;
 
 background: linear-gradient(
   to right bottom,
   rgba(173, 170, 170, 1),
   rgba(255, 255, 255, 0.8)
 );
 `
 
 const ContentTxt = styled.div`
 font-family: "fontspring";
 display: flex;
 justify-self: center;
 width: 60rem;
 max-width: 85vw;
 height: 30rem;
 color: black;
 font-size: 3.5rem;
 `
const Img_Wrapper= styled.div`
align-self: center;
justify-self: center;
`

const Img = styled.img`
width: 60rem;
max-width: 65vw;
@media screen and (max-height: 630px){
  display: none;
}
`


const MainContent = () =>
  <>
    <Wrapper>
    <Img_Wrapper>
      <Img src={`https://floresser-api.herokuapp.com/uploads/Logotipofundotransp_Prancheta_5_3x_f7aea51abf_a2dd008e38.png?updated_at=2022-10-12T23:48:43.260Z`} alt={'logotipo Floresser escrito em cor creme com fundo verde musgo claro'}/>
    </Img_Wrapper>
      <ContentTxt>A kokedama é uma técnica japonesa de cultivo de plantas em que a planta é cultivada em uma bola de terra coberta com musgo. Kokedamas são ótimas plantas para cultivar em pequenos espaços, como dentro de casa, e também são muito fáceis de cuidar</ContentTxt>
      <Link href='/catalogo'><Button>CATALOGO</Button></Link>
    </Wrapper>
  </>


export default MainContent