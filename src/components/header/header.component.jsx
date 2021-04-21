import { HeaderContainer } from './header.styles';
import Benz from '../../assets/benz.svg';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
// import Brands from '../../assets/brand-without-claim.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <div className='overall'>
            <div className='logo-container'>
                 <img src={Benz} alt="" />
                 <div className='brands'></div>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Company</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Vehicle</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Design</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Innovation</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Museum & History</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Sports</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Events</Link>
            </div>

            <div className='nav-container'>
               <Link className='nav' to=''>Lifestyle</Link>
            </div>

            <div className='search-container'>
                <SearchIcon className='search'/>
            </div>
            </div>
        </HeaderContainer>

    )
}

export default Header;