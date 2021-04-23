import styled from 'styled-components';
import Eq from '../../assets/eq.webp';
import Formula from '../../assets/formula.jpeg';
import Sports from '../../assets/motorsports.jpeg';


export const CategoriesContainer = styled.div` 
width: 100%;
max-width: 1350px;
display: flex;
justify-content: space-between;

@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}


.first-container {
    width: 33.33%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
}
}

.second-container {
    width: 33.33%;
    height: 15rem;
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 767px) {
   width: 100%;
}
}

.third-container {
    width: 33.33%;
    height: 15rem;
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 767px) {
   width: 100%;
}
}

.sec {
    width: 100%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
}

}

.thrice {
    width: 100%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
}

}

.first {
    width: 100%;
    height: 100%;
    background-image: url(${Eq});
    background-position: center;
    background-size: cover; 
}

.second {
    width: 100%;
    height: 100%;
    background-image: url(${Formula});
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

.description {
    position: absolute;
    z-index: 2;
    bottom: 0;
    background-color: black;
    opacity: 0.7;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
}

&:hover {
        .description {
            height: 5rem;
        }

        .textwo {
            visibility: visible;
        }
    }


.seconddescription {
    position: absolute;
    z-index: 2;
    bottom: 0;
    background-color: black;
    opacity: 0.7;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
}

&:hover {
        .seconddescription {
            height: 5rem;
        }

        .secondtextwo {
            visibility: visible;
        }
    }

.text {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
}

.secondtext {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
}

.textwo {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
    visibility: hidden;
}

.secondtextwo {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
    visibility: hidden;
}

.thirddescription {
    position: absolute;
    z-index: 2;
    bottom: 0;
    background-color: black;
    opacity: 0.7;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
}

&:hover {
        .thirddescription {
            height: 5rem;
        }

        .thirdtextwo {
            visibility: visible;
        }
    }

.thirdtext {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
}

.thirdtextwo {
    color: #fff;
    font-family: MBCorpo AScreen1Cond,MBCorpo Title,DaimlerCAC-Regular,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 2rem;
    visibility: hidden;
}


`;