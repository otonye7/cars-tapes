import { HeroContainer } from './hero.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Benz from '../../assets/mercedes.jpeg';
import Motorsports from '../../assets/mercedes.webp';
import Cali from '../../assets/cali.webp';
import Gclass from '../../assets/gclass.webp';

//infiniteLoop={true} 


const Hero = () => {
    return (
        <HeroContainer>
            <Carousel autoPlay={true} showThumbs={false} showIndicators={false} showArrows={true} >
            <div className='container'>
               <img src={Benz} alt="" />
               <div className='content'>
                   <p className='text'>
                      A MERCEDES BENZ FOR YOUR WRIST 
                   </p>
               </div>
               <div className='button-container'>
                   <button className='button'>Learn more</button>
               </div>   
            </div>
{/* 
            <div>
               <img src={Motorsports} alt="" />
            </div>

            <div>
               <img src={Cali} alt="" />
            </div>

            <div>
               <img src={Gclass} alt="" />
            </div> */}
            </Carousel>
        </HeroContainer>
    )
}

export default Hero;