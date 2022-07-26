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
animation-duration: 3s;
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
font-family: glora;
margin: 0 auto;
display: flex;
align-text: center;
justify-self: center;
width: 30rem;
height: 15rem;
color: white;
font-size: 2.3rem;
font-weight: bold;
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
flex-direction: row;
 `

