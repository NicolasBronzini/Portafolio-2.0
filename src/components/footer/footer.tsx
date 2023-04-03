import React, { useRef, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import '../../assets/css/footer.css';
const Footer = () => {
    const footerRef = useRef(null);
    const sunRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const footer = footerRef.current as unknown as HTMLElement;
            const sun = sunRef.current as unknown as HTMLElement;
            if (footer && isScrolledIntoView(footer)) {
                footer.classList.add('animate__animated', 'animate__bounceInDown');
            }
            if (sun && isSunVisible(sun)) {
                sun.classList.add('animate__animated', 'animate__fadeInUp');
            } else {
                sun.classList.remove('animate__fadeInUp');
                sun.classList.add('animate__fadeOutDown');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const isScrolledIntoView = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const buffer = 50; // add a buffer to start animation before reaching the footer

        return (rect.bottom - buffer) <= windowHeight;
    };

    const isSunVisible = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const buffer = 50; // add a buffer to start animation before reaching the bottom

        return (rect.top + buffer) <= windowHeight;
    };

    return (
        <>
            <div className='ContainerFooter' >
                <div className="sun" ref={sunRef}></div>

                <div className="grass"></div>
                <a href="https://www.linkedin.com/in/nicolas-bronzini-3aa09323b/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='iconFooter' />Linkedin</a>

                <a href="https://github.com/NicolasBronzini" target="_blank" rel="noopener noreferrer"><AiFillGithub className='iconFooter' />  GitHub</a>
            </div>
        </>
    );
};

export default Footer;