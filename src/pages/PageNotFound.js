import React from 'react';
import Page from '../assets/PageNotFound.jpg';
import { Link } from 'react-router-dom'
import '../styles/PageNotFound.css'

function PageNotFound() {
    return (
        <div className='not__found'>
            <img src={Page} alt="404_image" className='not__found__img' style={{cursor: "unset"}}/>
            <div className='not__found__container'>
                <h1 className='not__found__h1'>404.</h1>
                <p className='not__found__p'>Something's missing.</p>
                <Link className='not__found__button' to='/'>Go Back!</Link>
            </div>
        </div>
    )
}

export default PageNotFound
