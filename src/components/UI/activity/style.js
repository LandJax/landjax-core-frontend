import styled from "styled-components";
import { color } from "../../data/colors";

export const ActivityListWrapper = styled.div`
color: ${color.placeholder};
display: flex;
align-items:center;
justify-content:space-between;
padding: 3rem 5rem;
background: ${color.secondaryColor};
border-radius: 5px;
margin-bottom:2rem;
@media (max-width: 768px) {
        padding: 1rem;
        flex-wrap:wrap;
    }
.activity_date{
    display: flex;
    align-items:center;
     gap: 0.3rem;
}
h4{
    color: ${color.placeholder}; 
    font-weight: 400;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
}
`