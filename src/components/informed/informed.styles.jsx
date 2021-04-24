import styled from 'styled-components';



export const CardsContainer = styled.div` 
  width: 100%;

  .overall {
      width: 96%;
      margin: 0 auto;

 @media screen and (max-width: 800px) {
     width: 80%;
     margin: 0 auto;
}
  }


  .text {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 25px;
      font-weight: 500;
      line-height: 24px; 
  }

  .text-description {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      width: 40%;
      opacity: 0.8;
      line-height: 24px; 

 @media screen and (max-width: 800px) {
     width: 100%;
}
  }

  .text-des {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
      line-height: 24px; 
  }


  .eng {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
      line-height: 24px; 

@media screen and (max-width: 800px) {
     padding-left: 1rem;
}
  }

  .deutsch {
    color: #00adef;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px; 
@media screen and (max-width: 800px) {
     padding-right: 1rem;
}
  }
  
  .language {
      width: 10%;
      display: flex;
      justify-content: space-between;

@media screen and (max-width: 800px) {
     width: 100%;
     display: flex;
     justify-content: center;
}
  }

  .border {
      border: 2px solid #00adef;
  }


  
  .margin {
      border: 1px solid white;
      opacity: 0.2;
  }

  .social-medias {
      width: 25%;
      display: flex;
      justify-content: space-between;

@media screen and (max-width: 800px) {
     width: 90%;
}
  }

  .medias {
      color: white;
      opacity: 0.4;
  }

  .logo {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

@media screen and (max-width: 800px) {
     width: 100%;
}
  }

  .image {
      width: 20%;
@media screen and (max-width: 800px) {
     width: 30%;
     margin: 0 auto;
}
  }

  .jargons {
      width: 96%;
      margin: 0 auto;
  }

  .terms {
       width: 70%;  
      display: flex;
      justify-content: space-around;
 @media screen and (max-width: 800px) {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     padding-top: 2rem;
     width: 100%;
}

  }

  .bottom {
      display: flex;
      justify-content: space-between;

@media screen and (max-width: 800px) {
     display: flex;
     flex-direction: column;
}
  }

  img {
    width: 100%;
    height: auto;
}

`;