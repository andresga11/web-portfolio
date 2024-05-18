import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['n', 'd', 'r', 'e', 's'];
    const jobArray = ['S', 'o', 'f', ' t', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r' ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
      }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={19} />
                    </h1>
            
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>

            </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    )
}

export default Home