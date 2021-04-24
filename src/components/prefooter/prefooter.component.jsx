import {useEffect} from 'react';
import { CardsContainer } from './prefooter.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Prefooter = () => {
    useEffect(() => (
        Aos.init({duration: 1000})
    ), [])
    return (
        <CardsContainer >
        <div  data-aos='fade-up' className='overall'>
            <div className='container'>
                <h2 className='title'>More topics</h2>
                <br />
                <br />
        <div className='margin'></div>
                <br />
                <br />
            <div className='list'>
               <h5 className='list-title'> Electromobility</h5>
                <h5 className='list-title'>Innovation</h5>
                <h5 className='list-title'>Design</h5>
                <h5 className='list-title'>Exhibitions</h5>
                <h5 className='list-title'>Museum & History</h5>
                <h5 className='list-title'>Sports</h5>
                <h5 className='list-title'>Driving Events</h5>
                <h5 className='list-title'>me Convention</h5>
                <h5 className='list-title'>Mercedes me Portal</h5>
            </div>
            </div>
            <br />
            <div className='container'>
                <h2 className='title'>Shopping</h2>
                <br />
                <br />
            <div className='margin'></div>
                <br />
                <br />
            <div className='list'>
               <h5 className='list-title'> Electromobility</h5>
                <h5 className='list-title'>Innovation</h5>
                <h5 className='list-title'>Design</h5>
                <h5 className='list-title'>Exhibitions</h5>
                <h5 className='list-title'>Museum & History</h5>
                <h5 className='list-title'>Sports</h5>
                <h5 className='list-title'>Driving Events</h5>
                <h5 className='list-title'>me Convention</h5>
                <h5 className='list-title'>Mercedes me Portal</h5>
            </div>
            </div>
             <br />
            <div className='container'>
                <h2 className='title'>All about cars</h2>
                <br />
                <br />
            <div className='margin'></div>
                <br />
                <br />
            <div className='list'>
               <h5 className='list-title'> Electromobility</h5>
                <h5 className='list-title'>Innovation</h5>
                <h5 className='list-title'>Design</h5>
                <h5 className='list-title'>Exhibitions</h5>
                <h5 className='list-title'>Museum & History</h5>
                <h5 className='list-title'>Sports</h5>
                <h5 className='list-title'>Driving Events</h5>
                <h5 className='list-title'>me Convention</h5>
                <h5 className='list-title'>Mercedes me Portal</h5>
            </div>
            </div>
             <br />
            <div className='container'>
                <h2 className='title'>Discovery more</h2>
                <br />
                <br />
            <div className='margin'></div>
                <br />
                <br />
            <div className='list'>
               <h5 className='list-title'> Electromobility</h5>
                <h5 className='list-title'>Innovation</h5>
                <h5 className='list-title'>Design</h5>
                <h5 className='list-title'>Exhibitions</h5>
                <h5 className='list-title'>Museum & History</h5>
                <h5 className='list-title'>Sports</h5>
                <h5 className='list-title'>Driving Events</h5>
                <h5 className='list-title'>me Convention</h5>
                <h5 className='list-title'>Mercedes me Portal</h5>
            </div>
            </div>
        </div>

        </CardsContainer>
    )
}

export default Prefooter;