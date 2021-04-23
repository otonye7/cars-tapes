import styled from 'styled-components';
import Museum from '../../assets/level.webp';
import History from '../../assets/arrival.webp';
import Sports from '../../assets/teaser.webp';


export const CategoriesContainer = styled.div` 
width: 100%;
max-width: 1350px;
display: flex;

@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}

.first-container {
    width: 60%;
    height: 30rem;
    position: relative;

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

.sec {
    width: 100%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
   padding-top: 1rem;
}

}

.thrice {
    width: 100%;
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