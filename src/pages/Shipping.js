import React from 'react'
import useScrollTop from '../hooks/useScrollTop'
import '../styles/Policies.css'
function Shipping() {
    // Scrolling to the top
    useScrollTop();
    
    return (
        <div className='policies'>
            <div className='policies__div'>
            <h1 className='policies__h1'>Shipping</h1>
            <h2 className='policies__h2'>Processing time</h2>
            <p className='policies__p'>The time I need to prepare an order for shipping varies. Generally, it takes 2 to 5 days to process the items.</p>
‍            <h2 className='policies__h2'>Customs and import taxes</h2>
            <p className='policies__p'>Buyers are responsible for any customs and import taxes that may apply. I'm not responsible for delays due to customs.</p>
        </div>
        </div>
    )
}

export default Shipping
