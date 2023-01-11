import styled from "styled-components";
import { color } from "../../data/colors";

export const PagesWrapper = styled.div`
flex: 100%;
height: 100vh;
color:${color.white}; 
margin-left:${(props) => (props.isActive && props.screenSize <=900 ? "0rem" : props.isActive ? '22.8rem':"0rem")};
background: ${color.dashboardBg};
`