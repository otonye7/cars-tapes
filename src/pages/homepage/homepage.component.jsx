import { HomepageContainer } from './homepage.styles';
import Hero from '../../components/hero/hero.component';
import Search from '../../components/search/search.component';
import Welcome from '../../components/welcome/welcome.component';
import Cards from '../../components/cards/cards.component';
import Linked from '../../components/links/links.component';
import Categories from '../../components/categories/categories.component';
import AboutTitle from '../../components/about-title/about-title.component';
import Prefooter from '../../components/prefooter/prefooter.component';
import Informed from '../../components/informed/informed.component';

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
             <br />
            <br />
            <br />
            <div className='linked'>
                <Linked />
            </div>
            <br />
            <br />
            <div className='categories'>
                <Categories />
            </div> 
            <br />
            <br />
            <br />
            <br /> 
            <div className='about'>
                <AboutTitle />
            </div>
            <br />
            <br />
            <Prefooter />
            <br />
            <br />
            <Informed />
            </div>
        </HomepageContainer>
    )
}

export default Homepage;