import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #7a6d27;
height: 14.3rem;
min-width: 100%;
`
const Img_Wrapper= styled.div`
display: flex;
justify-content: center;


`
const Img = styled.img`
`

const Logo  = () =>
<Wrapper>
    <Img_Wrapper>
        <Img src={'http://localhost:1337/uploads/Floresser_30b59ea7cb.png'} 
            alt={'logotipo Floresser escrito em cor creme com fundo verde musgo claro'}/>
    </Img_Wrapper>
</Wrapper>


export default Logo