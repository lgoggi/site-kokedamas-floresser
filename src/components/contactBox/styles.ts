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
border-radius: 10px;
align-items: center;
justify-content: space-evenly;
width: 100rem;
height: 60rem;
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
    height: 7rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    color: black;
}
`

export const card = styled.div`
    background-color: #fff4d4;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 7rem;
    width: 30rem;
    height: 7rem;
    border-radius: 10px;
`