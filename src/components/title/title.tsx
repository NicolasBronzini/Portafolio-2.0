import React, { useEffect } from 'react';
import '../../assets/css/title.css';
// import Platillo from './utils/Platillo';

const Introduction = () => {

    useEffect(() => {
        const starsContainer = document.getElementById('starsContainer');
        if (starsContainer) {
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = `${Math.random() * 100}%`;
                star.style.left = `${Math.random() * 100}%`;
                const duration = (Math.random() + 0.5);
                star.style.animationDuration = `${duration.toFixed(1)}s`;
                star.style.animationDelay = `${(Math.random() * duration).toFixed(1)}s`;
                starsContainer.appendChild(star);
            }
        }
    }, []);

    return (
        <>
            <div className="background-container" id="starsContainer">
                <div className='title'>
                    <h1>Hello <span className='point'>.</span>
                        <br />
                        I am <br />
                        Nicolas
                    </h1>
                </div>
                {/* <Platillo /> */}
            </div>
        </>
    )
}

export default Introduction;