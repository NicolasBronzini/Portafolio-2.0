import React from 'react';
import '../../assets/css/cloud.css'
interface Proyecto {
    link: string;
    text: string;
    image: string;
    description: string;
}

interface CloudProps {
    proyectos: Proyecto[];
}

function Cloud(props: CloudProps) {
    const proyectos = props.proyectos.map((proyecto: Proyecto, index: number) => {
        const cloudAnimationClass = `cloud-animation cloud-animation${index}`;

        return (
            <>
                <div className={cloudAnimationClass} />
                <div className="cloud-item" key={index}>
                    <div className="cloud-text">
                        <h4>{proyecto.text}</h4>
                        <p>{proyecto.description}</p>
                        <br /><br />
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className='btnClaud'>Ver...</a>
                    </div>
                    <div className="cloud-image">
                        <img src={proyecto.image} alt={proyecto.text} />
                    </div>
                </div>
            </>
        );
    });

    return (
        <>
            <div className="cloud">
                {proyectos}
            </div>

        </>
    );
}



export default Cloud;
