import styled from "styled-components";
import { color } from "../../data/colors";

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

export const InventoryWrapper = styled.div`
display: flex;
flex-wrap:wrap;
 gap: 1rem;
padding: 3rem 4rem;
@media (max-width: 768px) {
    flex-wrap:nowrap; 
    flex-direction:column;
    padding: 1rem;
  }

  .overlay{
    width: 100%;
    height: 100%;
    background:#5C6273;
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    opacity:0;
    transition: 1s ease;
    padding: 1rem;
    .detail{
        font-size:16px;
      color: white;
    }
    .title{
      font-size:12px;
      color: white;
    }
}

.img_holder{
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content:center;
    position: relative;

    &:hover .overlay {
  opacity: 1;
  }
    @media (max-width: 768px) {
        width: 100%;
  }
    img{
        width: 15rem;
        height: 15rem;
        object-fit:contain;
        @media (max-width: 768px) {
            object-fit:cover;
  }
    }
}

`