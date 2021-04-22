import styled from 'styled-components';



export const WelcomeContainer = styled.div` 
width: 90%;
max-width: 1200px;
height: 25rem;
background-color: black;
margin: 0 auto;
display: flex;
align-items: center;

@media screen and (max-width: 800px) {
   padding-top: 2rem;
}


.welcome-container {
    width: 100%;
    align-items: center; 
    margin: 0 auto;
}

.button {
    background-color: #00adef;
    color: white;
}

.text {
    color: white;
    font-family: MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 1.85714rem;
    line-height: 2.28571rem;
    font-weight: 500;

@media screen and (max-width: 800px) {
   width: 80%;
   margin: 0 auto;
}
}

.paragraph {
    color: white;
    width: 63%;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 0.85714rem;
    font-weight: 400;

    
@media screen and (max-width: 800px) {
   padding-top: 1rem;
   width: 80%;
   margin: 0 auto;
}

}

.paragraphs {
    color: white;
    width: 30%;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 0.85714rem;
    font-weight: 400;

@media screen and (max-width: 800px) {
   padding-top: 1rem;
   width: 80%;
   margin: 0 auto;
}
}

.button-container {
@media screen and (max-width: 800px) {
   width: 80%;
   margin: 0 auto;
}
}
`;