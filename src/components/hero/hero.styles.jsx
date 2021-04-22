import styled from 'styled-components';



export const HeroContainer = styled.div` 
width: 100%;

.container {
    position: relative;
}

.content {
    position: absolute;
    z-index: 3;
    top: 25px;
    left: 80px;
 @media screen and (max-width: 800px) {
  display: none;
}
}

.button-container {
    position: absolute;
    z-index: 3;
    top: 130px;
    left: 80px;
}

.button {
    background-color: #333;
    color: white;

@media screen and (max-width: 800px) {
  display: none;
}
}

.text {
    color: white;
    font-weight: 400;
    font-size: 2.28571rem;
    line-height: 2.85714rem;
    font-family: MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
}
`;