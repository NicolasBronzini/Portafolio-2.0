import React, { useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import '../../assets/css/footer.css';

const Footer = () => {
    const footerRef = useRef(null);

    // Agregamos la clase 'loaded' al footer cuando se haya cargado la página
    document.addEventListener('DOMContentLoaded', () => {
        const footer = footerRef.current as unknown as HTMLElement;
        footer.classList.add('loaded');
    });

    return (
        <>
            <div className='ContainerFooter' ref={footerRef}>
                <div className="sun"></div>
                <div className="grass"></div>
                <a href="https://www.linkedin.com/in/nicolas-bronzini-3aa09323b/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='iconFooter' />Linkedin</a>
                <a href="https://github.com/NicolasBronzini" target="_blank" rel="noopener noreferrer"><AiFillGithub className='iconFooter' />  GitHub</a>
            </div>
        </>
    );
};

export default Footer;
