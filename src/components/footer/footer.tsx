import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import '../../assets/css/footer.css'

const footer = () => {
    return (
        <>
            <div className='ContainerFooter'>
                <div className="sun"></div>
                <div className="grass"></div>
                <a href="https://www.linkedin.com/in/nicolas-bronzini-3aa09323b/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='iconFooter' />Linkedin</a>

                <a href="https://github.com/NicolasBronzini" target="_blank" rel="noopener noreferrer"><AiFillGithub className='iconFooter' />  GitHub</a>
            </div>
        </>
    )
}

export default footer