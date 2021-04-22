
import { HomepageContainer } from './homepage.styles';
import Hero from '../../components/hero/hero.component';
import Search from '../../components/search/search.component';
import Welcome from '../../components/welcome/welcome.component';
import Cards from '../../components/cards/cards.component';

const Homepage = () => {
  
    return (
        <HomepageContainer>
            <div className='header-container'>
            <div className='hero'>
                <Hero />
            </div>
            <div className='search'>
                 <Search />
            </div>
            <div className='welcome'>
                <Welcome />
            </div>
            <div className='card' >
                <Cards />
            </div>
            </div>
        </HomepageContainer>
    )
}

export default Homepage;