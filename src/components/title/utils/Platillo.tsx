import React from 'react'
import platillo from '../../../assets/img/platillo.png'
import '../utils/platillo.css'
const Platillo = () => {
    return (
        <div className='platilloVolador'>
            <img src={platillo} alt="Platillo volador" className='platilloVolador' />
        </div>

    )
}

export default Platillo