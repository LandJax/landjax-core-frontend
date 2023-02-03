import styled from "styled-components";
import { color } from "../../data/colors";

export const SideBarWrapper = styled.div`
padding:0rem 0rem 3.5rem 0rem;
height: 100vh;
position: fixed;
top: 0;
left: 0;
transition: .5s ease;
background:${color.landJaxPrimaryColor};
.cancel{
    display: flex;
    justify-content:flex-end;
    padding: 1rem;
}
width: ${(props) => (props.isActive && props.screenSize <=900 ? "15rem":props.isActive ? "23rem":'0rem')};
@media (max-width: 768px) {
    z-index:1000000;
  }
`

export const ProfileContainer = styled.div`
padding:3.5rem 5.563rem 0rem 5.563rem;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
.image_Wrapper{
width: 13rem;
height: 13rem;
border: 5px solid #F6FFFC;
border-radius:100%;
display: flex;
align-items:center;
justify-content:center;
@media (max-width: 768px) {
    width: 9rem;
height: 9rem;
  }
img{
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  border-radius:100%;
  
  @media (max-width: 768px) {
    width: 8.5rem;
height: 8.5rem;
  }
}
}

.profile_nameholder{
    margin-top:1.375rem;
    h4{
    font-weight: 400;
font-size: 0.813rem;
font-family: 'Inter', sans-serif;
@media (max-width: 768px) {
    font-size: 0.5rem;
  }
}
h5{
font-weight: 400;
font-size: 0.813rem; 
text-align:center;
font-family: 'Inter', sans-serif;
@media (max-width: 768px) {
    font-size: 0.5rem;
  }
}
}
`

export const NavItems = styled.div`
margin:3.875rem 1.188rem 0rem 1.188rem;
ul{
    list-style:none;
    padding:0;
     margin:0;
    color: ${color.white};
    li{
        .tab_link{
background: rgba(246, 255, 252, 0.2);
border-radius: 5px;
padding: 1.5rem 0rem;
display: flex;
flex: 100%;
justify-content:center;
font-weight: 600;
font-size: 24px;
line-height: 100%;
margin-bottom:0.5rem;
&:hover{
   color: white;
}
@media (max-width: 768px) {
   font-size:20px;
  }
        }
    }
    
}
.is_active{
    color:${color.placeholder};
    background:${color.landJaxSecondaryColor} !important;
}
`
