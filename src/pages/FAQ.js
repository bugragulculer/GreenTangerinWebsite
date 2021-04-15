import React from 'react'
import useScrollTop from '../hooks/useScrollTop'
import '../styles/Policies.css'

function FAQ() {
    // Scrolling to the top
    useScrollTop();

    return (
        <div className='policies__div'>
            <h1 className='policies__h1'>Frequently Asked Questions</h1>
            <h2 className='policies__h2'>COVID-19 Update</h2>
            <p className='policies__p'>Please note: due to Covid-19, there may be delays to both production and delivery times.

            It takes 2 to 5 days for the fulfillment of any printed product.

            Normal shipping times are like this;
            US: 2 - 5 Business Days
            Europe: 3 - 12 Business Days
            Americas: 6 - 14 Business Days
            Australia/NZ: 4 - 14 Business Days
            Worldwide: 8 - 14 Business Days

            As of June 15, here are the approximate delays you can expect in addition to the estimated delivery times:
            US: 5 - 25 additional business days (Depending on the fulfillment location)
            Europe, Australia, New Zealand: 10 - 25 additional business days (Depending on the fulfillment location)
            Americas: 5 - 25 additional business days
            Worldwide: 15 - 30 additional business days

            I am really sorry that some deliveries may take so much time to arrive. I hope you can understand this situation.</p>
‍            <h2 className='policies__h2'>About Framing</h2>
            <p className='policies__p'>All my products ship without any frame. Shipping prints with frames are very expensive right now and choosing a frame is a personal thing to do. If you have problems with choosing them, I can suggest a couple of them, just send me a message.</p>
            <p className='policies__p'>Because of where I live, it would be expensive to ship these illusrations that is why I partnered with Printful to print & send these beautiful illustrations by their warehouses all around the world.
            I couldn't function without Printful. In their role as a production partner, they print, pack, & ship out orders from their California production/fulfillment center, allowing me to focus on what I'm best at - designing top-notch products that my customers will love!</p>
        </div>
    )
}

export default FAQ
