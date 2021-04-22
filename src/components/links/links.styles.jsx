import styled from 'styled-components';



export const LinkContainer = styled.div`
width: 99%;
margin: 0 auto;
/* display: flex;
justify-content: space-between;  */

.link-container {
    display: flex;
    justify-content: center;

 @media screen and (max-width: 800px) {
   padding-right: 4rem;
}
}

.new {
    width: 5%;
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;

@media screen and (max-width: 800px) {
   padding-right: 4rem;
}
}

.popular {
    width: 6%;
    display: flex;
    justify-content: space-between;
}


.videos {
    width: 6%;
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
@media screen and (max-width: 800px) {
   padding-left: 5rem;
}
}


.description {
    color: white;
    color: #00adef; 
}

.new-link {
    text-decoration: none;
    color: white;

&:hover{
    color: #00adef;
}
}
`;