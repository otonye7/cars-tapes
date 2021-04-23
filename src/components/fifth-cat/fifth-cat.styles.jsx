import styled from 'styled-components';
import Arrow from '../../assets/arrow.webp';
import Formula from '../../assets/eqs.jpeg';


export const CategoriesContainer = styled.div` 
width: 100%;
max-width: 1350px;
display: flex;


@media screen and (max-width: 767px) {
   display: flex;
   flex-direction: column;
}


.first-container {
    width: 33.33%;
    height: 15rem;

@media screen and (max-width: 767px) {
   width: 100%;
   padding-top: 1rem;
}
}

.second-container {
    width: 33.33%;
    height: 15rem;
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 767px) {
   width: 100%;
   padding-top: 1rem;
}
}

.third-container {
    width: 33.33%;
    height: 15rem;
    display: flex;
    justify-content: space-between;

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
    background-image: url(${Arrow});
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


`;