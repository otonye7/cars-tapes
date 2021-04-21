import { HomepageContainer } from './homepage.styles';
import Hero from '../../components/hero/hero.component';

const Homepage = () => {
    return (
        <HomepageContainer>
            <div className='header-container'>
                <Hero />
            </div>
        </HomepageContainer>
    )
}

export default Homepage;