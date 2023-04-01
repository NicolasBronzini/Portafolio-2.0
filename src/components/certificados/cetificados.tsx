import React from 'react'
import cerJS from '../../assets/img/certificados/JavaScript.png'
import cerDW from '../../assets/img/certificados/DesarrolloWeb.png'
import cerReact from '../../assets/img/certificados/ReactJs.png'
import '../../assets/css/certificados.css'
const Certificados = () => {
    return (
        <>
            <div className='ContainerCer'>
                <div className='ContainerImg'>
                    <img src={cerDW} alt="Desarrollo Web" />
                </div>
                <div className='ContainerImg'>
                    <img src={cerJS} alt="JavaScript" />
                </div>
                <div className='ContainerImg'>
                    <img src={cerReact} alt="ReactJs" />
                </div>
            </div>
        </>
    )
}

export default Certificados                          