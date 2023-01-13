import styled from "styled-components";
import { color } from "../data/colors";

export const PagesWrapper = styled.div`
flex: 100%;
color:${color.white}; 
margin-left:${(props) => (props.isActive && props.screenSize <=900 ? "0rem" : props.isActive ? '23rem':"0rem")};
background: ${color.dashboardBg};
.bars_wrapper{
    padding:1rem;
}
.Activity_container{
    padding: 4rem 3rem;
    @media (max-width: 768px) {
        padding: 1rem;
    }
}
`