import { Icon } from "@iconify/react";
import styled from "styled-components";

const InfoText=styled.div`
    display: none;
    height: 8rem;
    width: 30rem;
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    right: 30px;
    bottom: 25px;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
`

const InfoBox=styled.div`
    height: 35px;
    width: 35px;
    border-radius: 10px;
    border: 5px solid #000042;
    background-color: transparent;
    position: fixed;
    right: 25px;
    bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${InfoText} {
    display: block;
  }
  @media screen and (max-width: 1000px){
    display: none;
  }
`
const ChangeClass = ()=>{
    let element = document.getElementById("InfoText");
    if (element?.style.display === "none") {
        element.style.display = "block";
      }if (element?.style.display === "block") {
        element.style.display = "none";
      }
}

const Info = () => 
<>
    <InfoBox onClick={()=> ChangeClass}>
        <Icon id="icon" icon="bi:info-square-fill" width={45} color="#000042"/>
    <InfoText id="InfoText">Site desenvolvido a fins de estudo. Design e imagens provisórias, ainda em desenvolvimento.</InfoText>
    </InfoBox>
</>
    


export default Info