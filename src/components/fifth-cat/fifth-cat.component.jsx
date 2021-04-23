import {useEffect} from 'react';
import { CategoriesContainer } from './fifth-cat.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const FifthCat = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CategoriesContainer>
           <div data-aos='fade-up' className='first-container'>
               <div className='first'></div>
           </div>

           <div data-aos='fade-up' className='second-container'>
                <div className='second'></div>
           </div>

        </CategoriesContainer>
    )
}

export default FifthCat;