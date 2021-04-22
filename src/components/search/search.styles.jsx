import styled from 'styled-components';



export const SearchContainer = styled.div` 
width: 99%;
display: flex;
padding-bottom:1rem;
justify-content: center;
align-items: center; 
/* border: 2px solid red; */
             
             
@media screen and (max-width: 800px) {
   padding-bottom: 1rem;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
}



.search {
    position: absolute;
    color: black;
    background-color: white;
    right: 150px;
@media screen and (max-width: 800px) {
    right: 70px;
}
}


 .forms {
     width: 90%;
     height: 35px;

 @media screen and (max-width: 800px) {
   width: 75%;
}

 }
`;