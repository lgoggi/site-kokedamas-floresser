import styled, { keyframes } from "styled-components";

const tonext = keyframes`
93% {
  left: 0;
}
95% {
  left: 100%;
}
98% {
  left: 100%;
}
99% {
  left: 0;
}
`
const tostart = keyframes`
  93% {
    left: 0;
  }
  95% {
    left: -400%;
  }
  98% {
    left: -400%;
  }
  99% {
    left: 0;
  }
`

const snap = keyframes`
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
`

export const wrapper_carousel = styled.div`
position: relative;
display: flex;
text-align: center;
margin: 0 auto;
width: 50rem;
height: 50rem;
overflow: hidden;
overflow-x: scroll;
scroll-behavior: smooth;
scroll-snap-type: x mandatory;
::-webkit-scrollbar{
  display: hidden;
  background-color: #fff1da;
  height: 0;
  width: 0;
}
`
export const carousel_snapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
scroll-snap-align: none;
animation-name: ${tonext}, ${snap};
animation-duration: 20s;
animation-timing-function: ease;
animation-iteration-count: infinite;
}
`
export const carousel_slide = styled.li`
list-style: none;
position: relative;
z-index: -1;
}
.img{
  width: 50rem;
  height: 50rem;
}
&:last-child{
  ${carousel_snapper}{
    animation-name: ${tostart}, ${snap};
  }
}
`

export const contentTxt = styled.div`
font-family: "fontspring";
margin: 0 auto;
display: flex;
align-text: center;
justify-self: center;
width: 30rem;
height: fit-content;
color: white;
font-size: 3rem;
`
export const button = styled.button`
font-family: 'Glora Black';
display: flex;
justify-content: center;
align-items: center;
margin: 5rem;
font-size: 2.5rem;
width: 20rem;
height: 5rem;
border: 3px solid black;
cursor: pointer;
box-shadow: 5px 5px 5px 0px #131833;
&:active{
  transform: translate(5px, 5px);
  box-shadow: none;
}
background: linear-gradient(
  to right bottom,
  rgba(173, 170, 170, 1),
  rgba(255, 255, 255, 0.8)
);
`

export const wrapper = styled.div`
background: linear-gradient(
  to right,
  rgba(122, 109, 39, 0.8),
  rgba(122, 109, 39, 0)
);
width: 100rem;
height: 50rem;
padding: 5rem;
display: flex;
margin: 0 auto;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
 `

