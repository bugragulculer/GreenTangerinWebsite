// Header component that is used on the home page. 
import '../styles/Header.css'
import {Link} from 'react-router-dom'

const App = (header) => {
    return <div className='header__container'>
        <div className='header__header' src={header.header.image} alt='f1_circuits'>
            <div className='header__image__1'>
                <img className='header__image' src={header.header.image} alt='f1_circuits' style={{cursor: "unset"}}/>
            </div>
            <div className='header__gradient'>
                <h1 className='header__h1'>{ header.header.title }</h1>
                <h2 className='header__h2'>{ header.header.subtitle }</h2>
                <Link to={header.header.url} className='header__button'>{header.header.buyButton}  </Link>
            </div>
        </div>
    </div>
}

export default App