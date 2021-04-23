import styled from 'styled-components';



export const CardsContainer = styled.div` 
  width: 100%;

  .about-title {
      width: 96%;
      margin: 0 auto;
      display: flex;

@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}
  }

  .gas-station {
      display: flex;
  }

  .carbon {
      display: flex;
      padding-left: 1rem;

@media screen and (max-width: 767px) {
   padding-left: 0rem;
}
  }

  .set {
      display: flex;
      padding-left: 1rem;

@media screen and (max-width: 767px) {
   padding-left: 0rem;
}
  }

  .gas {
      color: white;
  }

  .gas-title {
      color: white;
      padding-top: 0.3rem;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
       font-weight: 500;
       line-height: 24px;  
  }

  .co {
      color: white;
  }

  .co-title {
      color: white;
      padding-top: 0.3rem;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px; 
      
  }

  .setting {
      color: white;
  }

  .setting-title {
      color: white;
      padding-top: 0.3rem;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px; 
  }

`;