import {useEffect} from 'react';
import { CardsContainer } from './cards.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Card = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CardsContainer>
            <div className='card'></div>
             <div className='card2'></div>
            <div className='card3'></div>
            <div className='card4'></div> 
        </CardsContainer>
    )
}

export default Card;