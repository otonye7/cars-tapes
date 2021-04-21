import styled from 'styled-components';
// import Benz from '../../assets/benz.svg';
import Brands from '../../assets/brand-without-claim.svg';


export const HeaderContainer = styled.div` 
   width: 100%;
   height: 7rem; 
   background-color: black;
   display: flex;
   justify-content: space-between;

   .logo-container {
      width: 15%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 767px){
        width: 80%;
}
   }

   .overall {
      width: 92%;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      align-items: center; 
   }

   .search {
      color: white;
      cursor: pointer;
   }
   
   .nav-container {
      @media screen and (max-width: 767px){
        display: none;
}
   }

   .brands {
    width: 63%;
    height: 1.8rem;
    object-fit: cover;
    background-image: url(${Brands});
    background-position: center;
    background-size: cover;
    margin-top: 0.2rem;

    @media screen and (max-width: 767px){
       width: 63%;
        height: 2.4rem;
}
  } 

  .nav {
     text-decoration: none;
     font-family: MBCorpo Text,DaimlerCS-;
     color: white;
     font-size: 16px;
    line-height: 30px;
  }


   img {
    width: 30%;
    height: auto;
}
`;