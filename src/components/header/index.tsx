import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: #7a6d27;
height: 14.3rem;
min-width: 100vw;
overflow: hidden;
`
const Img = styled.img`
margin-top: -42rem;
height: 110rem;
}
`

const Logo  = () =>
<Wrapper>
    <Img src={'http://localhost:1337/uploads/Floresser_bbec1c274c.png'} 
        alt={'logotipo Floresser escrito em cor creme com fundo verde musgo claro'}/>
</Wrapper>


export default Logo