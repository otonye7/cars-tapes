import styled from 'styled-components';
import Museum from '../../assets/benzg.webp';
import History from '../../assets/history.webp';
import Sports from '../../assets/sports.webp';


export const CategoriesContainer = styled.div` 
width: 99%;
max-width: 1350px;
display: flex;

@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}

.first-container {
    width: 60%;
    height: 30rem;

@media screen and (max-width: 767px) {
   width: 100%;
   height: 15rem;
   padding-top: 1rem;
}
}

.second-container {
    width: 40%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
   padding-top: 1rem;
}
}

.first {
    width: 100%;
    height: 100%;
    background-image: url(${Museum});
    background-position: center;
    background-size: cover; 
}

.second {
    width: 100%;
    height: 100%;
    background-image: url(${History});
    background-position: center;
    background-size: cover; 
}

.third {
    width: 100%;
    height: 100%;
    background-image: url(${Sports});
    background-position: center;
    background-size: cover; 
}

`;