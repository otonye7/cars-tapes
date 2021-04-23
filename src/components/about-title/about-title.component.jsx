import {useEffect} from 'react';
import { CardsContainer } from './about-title.styles';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import RoomIcon from '@material-ui/icons/Room';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import About from '../about/about.component';
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutTitle = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CardsContainer data-aos='fade-up'>
            <div className='about-title'>
                <div className='gas-station'>
                    <LocalGasStationIcon className='gas'/>
                    <h5 className='gas-title'>Kraftstoffverbrauch kombiniert </h5>
                </div>

                <div className='carbon'>
                    <RoomIcon className='co'/>
                    <h5 className='co-title'>-Emissionen kombiniert</h5>
                </div>

                <div className='set'>
                    <SettingsInputHdmiIcon className='setting'/>
                    
                    <h5 className='setting-title'>Stromverbrauch im kombinierten Testzyklus</h5>
                </div>
            </div>

            <br />
            <br/>
            <About />
        </CardsContainer>
    )
}

export default AboutTitle;