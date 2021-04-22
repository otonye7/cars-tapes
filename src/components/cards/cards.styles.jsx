import styled from 'styled-components';
import Chanell from '../../assets/chanell.webp';
import Museum from '../../assets/museum.webp';
import She from '../../assets/she.webp';
import Me from '../../assets/me.webp';



export const CardsContainer = styled.div` 
width: 90%;
max-width: 1200px;
height: 10rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
align-items: center;
margin: 0 auto;
/* padding-left: 4rem; */

@media screen and (max-width: 800px) {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  width: 70%;  
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  padding-left: 0rem;
}






.card {
    width: 100%;
    height: 100%;
    background-image: url(${Chanell});
    background-position: center;
    background-size: cover; 
}

.card2 {
    width: 100%;
    height: 100%;
    background-image: url(${Museum});
    background-position: center;
    background-size: cover;
}

.card3 {
    width: 100%;
    height: 100%;
    background-image: url(${She});
    background-position: center;
    background-size: cover;
}

.card4 {
    width: 100%;
    height: 100%;
    background-image: url(${Me});
    background-position: center;
    background-size: cover;
}



`;