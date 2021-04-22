import {useEffect} from 'react';
import { LinkContainer } from './links.styles';
import DescriptionIcon from '@material-ui/icons/Description';
import GradeIcon from '@material-ui/icons/Grade';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Linked = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <LinkContainer>
            <div data-aos='fade-up' className='link-container'>
                <div className='new'>
                    <DescriptionIcon className='description'/>
                    <Link className='new-link'>New</Link>
                </div>

                <div className='popular'>
                    <GradeIcon className='description'/>
                    <Link className='new-link'>Popular</Link>
                </div>

                <div className='videos'>
                    <VideocamIcon className='description'/>
                    <Link className='new-link'>Videos</Link>
                </div>
            </div>
        </LinkContainer>
    )
}

export default Linked;