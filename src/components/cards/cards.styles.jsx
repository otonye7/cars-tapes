import styled from 'styled-components';
import Chanell from '../../assets/chanell.webp';
import Museum from '../../assets/museum.webp';
import She from '../../assets/she.webp';
import Me from '../../assets/me.webp';



export const CardsContainer = styled.div` 
width: 90%;
height: 20rem;
margin: 0 auto;
display: flex;
align-items: center;


.container {
    width: 100%;
   height: 10rem; 
   display: flex;
   justify-content: space-between; 
}

.card {
    width: 20%;
    height: 90%;
    background-image: url(${Chanell});
    background-position: center;
    background-size: cover;
    /* @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
} */
}

.card2 {
    width: 20%;
    height: 90%;
    background-image: url(${Museum});
    background-position: center;
    background-size: cover;
    /* @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
} */
}

.card3 {
    width: 20%;
    height: 90%;
    background-image: url(${She});
    background-position: center;
    background-size: cover;
    /* @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
} */
}

.card4 {
    width: 20%;
    height: 90%;
    background-image: url(${Me});
    background-position: center;
    background-size: cover;
    /* @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
} */
}

`;