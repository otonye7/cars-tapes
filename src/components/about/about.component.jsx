import {useEffect} from 'react';
import { CardsContainer } from './about.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])
    return (
        <CardsContainer >
            <div className='about'>
                <h5 className='about-text'>
                    1 Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt.
                    Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung 
                    (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. 
                    Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen 
                    zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer
                    Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und
                   den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen
                   und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                </h5>
                <br />
                <h5 className='about-text'>
                    4 Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen 
                    Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert.
                    Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen
                   den Angaben und den amtlichen Werten sind möglich.
                </h5>
                <br />
                <h5 className='about-text'>
                    6 Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig
                   von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen
                    neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“
                    entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                </h5>
                <br />
                <h5 className='about-text'>
                   7 Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr.
                   101 ermittelt. Die EG-Typgenehmigung und eine Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen
                   Werten sind möglich.
                </h5>
                <br />
                <h5 className='about-text'>
                     8 Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom
                     TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                </h5>
            </div>
        </CardsContainer>
    )
}

export default About;