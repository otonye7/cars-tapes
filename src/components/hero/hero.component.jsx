import {useEffect} from 'react';
import { HeroContainer } from './hero.styles';
import CustomButton from '../custom-buttons/custom-buttons.component';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import Benz from '../../assets/mercedes.jpeg';
import Motorsports from '../../assets/mercedes.webp';
import Cali from '../../assets/cali.webp';
// import Gclass from '../../assets/gclass.webp';


const Hero = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <HeroContainer>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}  showIndicators={false} showArrows={true} >
            <div className='container'>
               <img src={Benz} alt="" />
               <div className='content'  data-aos='fade-down'>
                   <h1 className='text'>
                      A MERCEDES BENZ FOR YOUR WRIST 
                   </h1>
               </div>
               <br/>
               <br/>
               <div className='button-container'  data-aos='fade-down'>
                   <CustomButton className='button'>Learn more</CustomButton>
               </div>   
            </div>

            <div>
               <img src={Motorsports} alt="" />
                  <div className='content'  data-aos='fade-down'>
                   <h1 className='text'>
                      EQS WORLD PREMIERE
                   </h1>
               </div>
               <br/>
               <br/>
               <div className='button-container'  data-aos='fade-down'>
                   <CustomButton className='button'>Learn more</CustomButton>
               </div>   
            </div>

            <div>
               <img src={Cali} alt="" />
                  <div className='content'  data-aos='fade-down'>
                   <h1 className='text'>
                      THE NEW CLS
                   </h1>
               </div>
               <br/>
               <br/>
               <div className='button-container'  data-aos='fade-down'>
                   <CustomButton className='button'>Learn more</CustomButton>
               </div>   
            </div>

            {/* <div>
               <img src={Gclass} alt="" />
                  <div className='content'  data-aos='fade-down'>
                   <h1 className='text'>
                     THIS IS FOR YOU WORLD 
                   </h1>
               </div>
               <br/>
               <br/>
               <div className='button-container'  data-aos='fade-down'>
                   <CustomButton className='button'>Learn more</CustomButton>
               </div>   
            </div>  */}
            </Carousel>
        </HeroContainer>
    )
}

export default Hero;