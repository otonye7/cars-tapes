import {useEffect} from 'react';
import { CategoriesContainer } from './categories.styles';
import Museum from '../../assets/benzg.webp';
import History from '../../assets/history.webp';
import Sports from '../../assets/sports.webp';
import Eq from '../../assets/eq.webp';
import Formula from '../../assets/formula.jpeg';
import Motor from '../../assets/motorsports.jpeg';
import Arrow from '../../assets/arrow.webp';
import S from '../../assets/s.webp';
import Mercedes from '../../assets/mercedes.webp';
import Level from '../../assets/level.webp';
import Teaser from '../../assets/teaser.webp';
import Es from '../../assets/es.webp';
import Eqs from '../../assets/eqs.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Categories = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CategoriesContainer data-aos='fade-up' >
            <div className='first-container'>
                <img src={Museum} alt="" />
                <div className='description'>
                    <span className='first-text'>The G-Class: Made to last</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='second-image'>
                <img src={History} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>
            
            <div className='third-image'>
                <img src={Sports} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='fourth-image'>
                <img src={Eq} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='fifth-image'>
                <img src={Formula} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='sixth-image'>
                <img src={Motor} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='seventh-image'>
                <img src={Arrow} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='eight-image'>
                <img src={S} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='ninth-image'>
                <img src={Mercedes} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='tenth-image'>
                <img src={Level} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='eleventh-image'>
                <img src={Teaser} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='twelfth-image'>
                <img src={Es} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

            <div className='thirteenth-image'>
                <img src={Eqs} alt="" />
                <div className='description'>
                    <span className='first-text'>Spotlight the new top of the range model</span>
                    <span className='first-sub'>30 years in 1991, the s-class model series 140 celebrated its premiere at the Geneva motor show</span>
                </div>
            </div>

        </CategoriesContainer>
    )
}

export default Categories;