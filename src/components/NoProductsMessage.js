// Creating a No product message when there is no product to show.
import React from 'react'
import '../styles/NoProductsMessage.css'

function NoProductsMessage() {
    return (
        <div className='message__display'>
            <h1 className='message__h1'>🥁 Stay Tuned! </h1>
            <p className='message__p'>Currently, no item is in this section. It doesn't mean it will stay this way forever. In the near future products will show up magically.</p>
        </div>
    )
}

export default NoProductsMessage
