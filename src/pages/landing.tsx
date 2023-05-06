import React from 'react'
import AbautMe from '../components/aboutme/AboutMe'
// import Certificados from '../components/certificados/cetificados'
import Footer from '../components/footer/footer'
import ContactForm from '../components/FormContact/FormContact'
import Proyecto from '../components/proyectos/proyectos'
// import TecnoCarousel from '../components/tecno/tecnoCarousel'
import Introduction from '../components/title/title'
const Landing = () => {
    return (
        <>
            <div className='bodyBackground'>
                <div>
                    <Introduction />
                    <AbautMe />
                    {/* <TecnoCarousel /> */}
                    <Proyecto />
                    {/* <Certificados /> */}
                    <ContactForm />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Landing