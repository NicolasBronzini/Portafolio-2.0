import React from 'react';
import Cloud from '../cloud/Cloud';
import Depayimg from '../../assets/img/Depay.png'
import HunterPrideImg from '../../assets/img/HunterPride.png'
import LogiaImg from '../../assets/img/LogiaCompañerosDelSilencio.png'
import Siena from '../../assets/img/Siena.png'
import '../../assets/css/cloud.css'
function Proyecto() {
    const proyectos = [
        { text: 'Depay', size: 15, image: Depayimg, description: 'Creación de página web en una aplicación de React, utilizando todas las API de Web3 posibles para realizar transacciones de criptomoneda. Además, se creó una API en NestJS para este flujo. ', link: "https://depayapp.com/" },
        { text: 'Hunter Pride', size: 10, image: HunterPrideImg, description: 'Trabajo de mantenimiento en una página web, corrigiendo y arreglando secciones con problemas de maquetación.', link: "https://www.hunters-pride.world/" },
        { text: 'Logia Compañeros del silencio', size: 8, image: LogiaImg, description: 'Creación de una página web en una aplicación de React para el uso e inscripción en la masonería argentina.', link: "" },
        { text: 'Siena', size: 8, image: Siena, description: 'Migración de una aplicación en .NET 2.0 a la versión más actualizada. Además, se desarrolló una sección para el registro de procesos masivos en la aplicación web.', link: "https://siena-login.bienesdelestado.gob.ar/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmvc%26redirect_uri%3Dhttps%253A%252F%252Fsiena.bienesdelestado.gob.ar%252F%26response_mode%3Dform_post%26response_type%3Did_token%26scope%3Dopenid%26state%3DOpenIdConnect.AuthenticationProperties%253DvD3br4JIQVy0_r70glyAwv6ui_iwcqfS-l14Opr-OJVVlzQPqvh1XuJ-azDVgmWu9oNEMb9sA74FYJ-b1K8i8dJRAkxE5G8zCXFwF5Pq_DhDRdtqJGBZ1VK7Bh4hS2MllpuUvtBr6gZ6MLA8ykTj7g5x-bRfxxdTWbifrO61CUEllwPvokE7OLNQQonXLgHnxLYJdB4xdVRvPhxFXotic156DshWGPZaFJBO0i6eO8TRbDDj%26nonce%3D638158242802987280.ZTQ0YTcwYWYtZWY5MC00ZjA4LWEyNzMtNTA3YzA5NmJjNTQ1OTNhYWU2ZjktZDNhOS00YTBmLTkwMWItN2MyNGVlNGNjODA4%26domain_hint%3Dsiena%26x-client-SKU%3DID_NET451%26x-client-ver%3D5.2.1.0" },
    ];

    return (
        <div className='containerCloud'>
            <Cloud proyectos={proyectos} />

        </div>
    );
}

export default Proyecto;
