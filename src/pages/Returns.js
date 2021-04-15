import useScrollTop from '../hooks/useScrollTop'
import React from 'react'
import '../styles/Policies.css'

function Returns() {
    // Scrolling to the top
    useScrollTop();

    return (
        <div className='policies__div'>
            <h1 className='policies__h1'>Returns & Exchanges</h1>
            <p className='policies__p'>I don't accept returns, exchanges, or cancellations. However, if you have a problem with the product you got,  please contact me if you have any problems with your order. Depending on the problem, and the source of the problem, things can be figured out.</p>
        </div>
    )
}

export default Returns
