import styled from "styled-components";
import { color } from "../data/colors";

export const DashboardWrapper = styled.div`
display:flex;
color:${color.white};
position: relative;
.marginBottom{
    @media (max-width: 768px) {
        margin-bottom:1rem;
  }  
}
.savebtn{
    display: flex;
    justify-content:flex-end;
    padding: 0rem 2.25rem;
}
`

export const SnapshotWrapper = styled.div`
display: flex;
padding: 2.25rem;
justify-content:flex-end;
gap:3.5rem;
font-size:30px;
@media (max-width: 768px) {
    gap:2.5rem;
  }
`

export const AccountFormWrapper = styled.div`

padding-left:5.375rem ;
width: 43.75rem;
@media (max-width: 768px) {
   padding: 1rem;
   width: 100%;
  }
.labelStyle{
    font-weight: 400;
font-size: 13.4669px;
font-family: 'Inter', sans-serif;
}
.label_small{
    color:${color.label};   
    font-size:12px;
    font-weight:normal;
}
.bio_area{
    resize:none;
}

`