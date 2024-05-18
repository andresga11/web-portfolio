import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
      }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_inrc3sa','template_sdi98dm', form.current, {
            publicKey: 'HXPp_mPUdf7ofV_Mg',
          } )
          .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className = "text-zone">
                    <h1> 
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} //1.5 second delay of animation
                        />
                    </h1>
                    <p>
                        I am interested in opportunities especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required ></input>
                                </li>
                                <li className='half'>
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}
export default Contact;
