import styled from 'styled-components';
// import Museum from '../../assets/benzg.webp';
// import History from '../../assets/history.webp';
// import Sports from '../../assets/sports.webp';


export const CategoriesContainer = styled.div` 
 max-width: 1750px;
 width: 100%;
 height: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-row: 1 / span 2;
 align-items: center;
 justify-content: center;

 @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
}

.first-container {
    position: relative;
}
 
.description {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    bottom: 0;
    height: 4.5rem;
    width: auto;
    display: flex;
    flex-direction: column;

@media screen and (max-width: 767px) {
   position: relative;
   opacity: 1;
}
}

.first-text{
   color: white; 
   padding-left: 2rem;
   font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;

 @media screen and (max-width: 767px) {
   padding-left: 1rem;
}
}

.first-sub {
    color: white;
    padding-left: 2rem;
    visibility: hidden;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    
 @media screen and (max-width: 767px) {
   padding-left: 1rem;
}
}

&:hover {

        .first-sub {
            visibility: visible;
        }
}

@media screen and (max-width: 767px) {
    &:hover {

.first-sub {
    visibility: hidden;
}
}
}

.second-image {
    position: relative;
}

.third-image {
    position: relative;
}

.fourth-image {
    position: relative;
}

.fifth-image {
    position: relative;
}

.sixth-image {
    position: relative;
}

.seventh-image {
    position: relative;
}

.eight-image {
    position: relative;
}

.ninth-image {
    position: relative;
}

.tenth-image {
    position: relative;
}

.eleventh-image {
    position: relative;
}

.twelfth-image {
    position: relative;
}

.thirteenth-image {
    position: relative;
}

.second-description {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    bottom: 0;
    height: 4.5rem;
    width: auto;
    display: flex;
    flex-direction: column;

@media screen and (max-width: 767px) {
   position: relative;
   opacity: 1;
}
}


 img {
    width: 100%;
    height: auto;
}

`;