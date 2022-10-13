import styled from 'styled-components';

export const wrapper = styled.div`
padding: 5ren;
background: linear-gradient(
    to left top,
    rgba(122, 109, 39, 0.6),
    rgba(0, 0, 0, 0)
  );
background-color: #4a5324;
display: flex;
flex-direction: column;
margin: 15rem auto;
border-radius: 10px;
align-items: center;
justify-content: space-evenly;
width: 100rem;
max-width: 80vw;
height: 50rem;
.instagram{
    color: white;
    background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
}
.whatsapp{
    background-color: #00E676;
}
a{
    font-family: 'Glora Black';
    width: 30rem;
    max-width: 55vw;
    height: 7rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    color: black;
}
`

export const card = styled.div`
padding: 5%;
    background-color: #fff4d4;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 7rem;
    width: 30rem;
    max-width: 55vw;
    height: 7rem;
    border-radius: 10px;
`