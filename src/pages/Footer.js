import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import '../styles/Footer.css'

function Navbar() {
    return (
        <nav className='footer'>
            <div className='footer__container'>
                {/* Logo of the Store */}
                <a className='footer__menu' href='https://greentangerin.com'>
                    <img className='footer__logo' src={Logo} alt="" />
                </a>
                {/* Menu items */}
                <ul className={'footer__menu'}>
                    <h2 className='footer__menu__h2' >Contact</h2>
                    <a className='footer__menu__a' href='https://twitter.com/GreenTangerin'>Twitter</a>
                    <a className='footer__menu__a' href='https://www.instagram.com/greentangerindesign'>Instagram</a>
                    <a className='footer__menu__a' href='https://mailto:contact@greentangerin.com'>E-Mail</a>
                </ul>
                {/* Policy items */}
                <ul className={'footer__menu'}>
                    <h2 className='footer__menu__h2'>Policies</h2>
                    <Link className='footer__menu__a' to='/shipping'>Shipping</Link>
                    <Link className='footer__menu__a' to='/returns-exchanges'>Returns - Exchanges</Link>
                    <Link className='footer__menu__a' to='/faq'>FAQ</Link>
                </ul>
            </div>
            <h2 className='footer__menu__copyright'>Copyright © 2021 Green Tangerin. All rights reserved.</h2>
        </nav>
    );
}


export default Navbar