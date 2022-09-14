import styled from 'styled-components';

export const wrapper = styled.div`
background: linear-gradient(
    to left top,
    rgba(122, 109, 39, 0.6),
    rgba(0, 0, 0, 0)
  );
background-color: #4a5324;
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 1%;
border-radius: 10px;
align-items: center;
justify-content: center;
width: 100rem;
height: 60rem;
.instagram{
    padding: 3% 1% 3% 3%;
    width: 3rem;
    height: 3rem;
}
.whatsapp{
    padding: 3% 1% 3% 3%;
    width: 4rem;
    height: 4rem;
}
a{
    text-decoration: none;
    font-size: 2rem;
    font-style: italic;
    font-weight: 700;
    color: black;
}
`

export const card = styled.div`
    background: url('https://static.vecteezy.com/ti/vetor-gratis/p1/4750688-tropical-verde-folhas-em-aquarela-fundo-eps-gr%C3%A1tis-vetor.jpg');
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 7rem;
    width: 30rem;
    height: 7rem;
    background-color: white;
    border-radius: 10px;
`