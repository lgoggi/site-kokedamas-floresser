import styled from "styled-components"

export const LeftBox_wrapper = styled.div`
    display: flex;
    align-self: start;
    justify-self: center;
    background-color: rgba(1,1,1, 0.1);
    height: 62rem;
    width: 33rem;
    border: 1px solid darkgrey;
`

const Leftbox = () => 
<LeftBox_wrapper></LeftBox_wrapper>

export default Leftbox