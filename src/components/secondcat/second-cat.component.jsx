import {useEffect} from 'react';
import { CategoriesContainer } from './second-cat.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const SecondCat = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CategoriesContainer>
           <div data-aos='fade-up' className='first-container'>
               <div className='first'></div>
               <div className='description'>
               <span className='text'>The G-Class made: to last</span>
               <span className='textwo'>for over 4o years, the stockohl in mountain of graz has been the ultimate text for every g-class</span>
               </div>
           </div>

           <div data-aos='fade-up' className='second-container'>
                <div className='second'></div>
                <div className='seconddescription'>
               <span className='secondtext'>Spotlight on the new top of the range model</span>
               <span className='secondtextwo'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
               </div>
           </div>

           
           <div data-aos='fade-up' className='third-container'>
                <div className='third'></div>
                <div className='thirddescription'>
               <span className='thirdtext'>Mercedes Eq Enthusiasts</span>
               <span className='thirdtextwo'>Denis heyn goes behind the scenes of Mercedes Eq and talk to the experts about the electric car</span>
               </div>
           </div>
        </CategoriesContainer>
    )
}

export default SecondCat;