import {useEffect} from 'react';
import { WelcomeContainer } from './welcome.styles';
import CustomButton from '../custom-buttons/custom-buttons.component';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Welcome = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <WelcomeContainer>
            <div data-aos='fade-up' className='welcome-container' >
              <h2 className='text'>Welcome to the Mercedes-Benz international website.</h2>
              <p className='paragraph'>
                  Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz.
                  To find out about offers in your location, please go to the local Mercedes-Benz website.
             </p>
             {/* <br /> */}
             <p className='paragraphs'>
             This is the International website of Mercedes-Benz AG.
             from the U.S., please visit our U.S. website www.mbusa.com.    
             </p>
             <br />
             <div className='button-container'>
             <CustomButton className='button'>Bring me to my local website</CustomButton>
             </div>
            </div>
        </WelcomeContainer>
    )
}

export default Welcome;