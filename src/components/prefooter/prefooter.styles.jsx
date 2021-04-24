import styled from 'styled-components';



export const CardsContainer = styled.div` 
  width: 96%;
  margin: 0 auto;

@media screen and (max-width: 800px) {
   width: 80%;
   margin: 0 auto;
}

  .overall {
    width: 100%;
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}
  }

  .title {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 22px;
      font-weight: 500;
      line-height: 24px;
  }

  .margin {
      border: 1px solid white;
      opacity: 0.2;
  }

  .sub-overall {
      display: flex;
      justify-content: space-between;
  }

  .list-title {
      color: white;
      font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      opacity: 0.6;

&:hover{
    color: #00adef;
    opacity: 1;
}
  }



`;