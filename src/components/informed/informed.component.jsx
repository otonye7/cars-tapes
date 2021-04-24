import {useEffect} from 'react';
import { CardsContainer } from './informed.styles';
import AMG from '../../assets/amg.svg';
import Daimler from '../../assets/daimler.svg';
import BENZ from '../../assets/smart.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Informed = () => {
    useEffect(() => (
        Aos.init({duration: 1000})
    ), [])
    return (
        <CardsContainer data-aos='fade-up'>
        <div className='overall'>
            <div className='header-container'>
                <h2 className='text'>Stay informed</h2>
            </div>
            <br />
            <br />
            <div className='margin'></div>
            <br />
            <br />
            <div className='description'>
                <h4 className='text-description'>
                     Follow us and use the following social media platforms to get in contact
                     with us and to share your passion for the brand, products and services of
                     Mercedes-Benz.
                </h4>
            </div>
            <br />
            <div className='social-medias'>
               <FacebookIcon className='medias'/>
               <TwitterIcon className='medias'/>
               <YouTubeIcon className='medias'/>
               <InstagramIcon  className='medias'/>
               <LinkedInIcon className='medias'/>
            </div>
            <br />
            <br />
            <div className='margin'></div>
            <br />
            <br />
        </div>
        <div className='logo'>
            <div className='image'>
                <img src={AMG} alt="" />
            </div>
            <div className='image'>
                <img src={Daimler} alt="" />
            </div>
            <div className='image'>
                <img src={BENZ} alt="" />
            </div>                
        </div>
        <br />
        <br />
        <div className ='break'>
            <div className='margin'></div>
        </div>
        <br />
        <br />
        <div className='jargons'>
            <h5 className='text-des'>
               This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website www.mbusa.com.
            </h5>
        </div>
        <br />
        <br />
        <div className='bottom'>
            <div className='language'>
                <h4 className='deutsch'>English</h4>
                <div className='border'></div>
                <h4 className='eng'>Deutsch</h4>
            </div>
            <div className='terms'>
                <h4 className='eng'>Provider</h4>
                <h4 className='eng'>Legal</h4>
                <h4 className='eng'>Cookies</h4>
                <h4 className='eng'>Private Statemen</h4>
                <h4 className='eng'>Newfeeds</h4>
                <h4 className='eng'>Contacts</h4>
                <h4 className='eng'>Careers</h4>
                <h4 className='eng'>investor-relations</h4>
                <h4 className='eng'>Daimer Ag</h4>
            </div>
        </div>

        </CardsContainer>
    )
}

export default Informed;