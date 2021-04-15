import React ,{useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Logo from '../assets/Logo.png'
import Menu from '../assets/menu.svg'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import BasketItem from '../components/BasketItem'
import CloseIcon from '@material-ui/icons/Close';
import '../styles/Cart.css'
import '../styles/Navbar.css'

function Navbar() {
    // constructing basket, current route and store.
    const basket = useSelector(state => state.basket)
    const currentRoute = useHistory().location.pathname.toLowerCase();
    const store = useSelector(state => ({
        product: state.product.items,
        basketLength: state.basket.length,
        basket: state.basket.items
    }))

    const [click, setClick] = useState(false);
    const [cartClick, setCartClick] = useState(false);

    const handleClick = () => setClick(!click);
    const handleCartClick = () => setCartClick(!click);
    const handleEmpty = () => ""
    const closeMobileMenu = () => setClick(false);
    const closeCartMenu = () => setCartClick(false);

    // Calculating the total price of the products in the cart.
    const calculateTotal = () => {
		let total = 0;
        if (basket.length !== 0) {
			const result = basket.map(price => price.price * price.number).reduce((a, b) => a + b);
            total = result;
		}
		return total;
    };

    return (
        <nav className='navbar'>
            <div className='navbar__container'>

                {/* Logo of the store */}
                <Link className='navbar__container__logo' to="/">
                    <img className='navbar__logo' src={Logo} alt="" onClick={closeMobileMenu}/>
                </Link>

                {/* Menu buttons */}
                <ul className={click ? 'nav__menu__active' : 'nav__menu'}>
                    <div className='nav__menu__item' onClick={closeMobileMenu}>
                        <Link
                            className={currentRoute.includes("products") ? "page active" : "page"}
                            to="/products"
                        >
                            Products
                        </Link>
                        <Link
                            className={currentRoute.includes("collections") ? "page active" : "page"}
                            to="/collections"
                        >
                            Collections
                        </Link>
                        <Link
                            className={currentRoute.includes("blog") ? "page active" : "page"}
                            to="/blog" 
                        >
                            Blog
                        </Link>
                    </div>
                </ul>

                {/* Menu button - For mobile*/}
                <div className="mobile__menu__container" onClick={handleClick}>
                    <img src={Menu} alt='menu' className='mobile__menu'/>
                </div>

                {/* Cart button and Cart itself*/}
                <div className='cart__container'>
                    <div className='cart__button' onClick={handleCartClick}>
                        <LocalGroceryStoreIcon className='cart__button__icon'/>
                        {store.basketLength >= 1 && <span className='badge__count'>{ store.basketLength }</span>}
                    </div>
                    
                    {/* Opening/Closing Cart with changing the className. */}
                    <div className={cartClick ? 'cart__menu__active' : 'cart__menu__disabled'} >
                        <div className='cart__container' >
                            <div className='cart__header' >
                                <h1 className='cart__header__header' id="empty" onClick={handleEmpty}>Your Cart</h1>
                                <CloseIcon className='cart__menu__cross' onClick={ closeCartMenu }/>
                            </div>
                            <div className='cart__content__container' id="empty" >
                                {basket.map((product, i) => (
                                    <BasketItem
                                        key={`${product.id}_${i}`}
                                        product={product}
                                        basket={basket}
                                    />
                                ))}
                            </div>
                            <div className='cart__divider' id="empty" />
                            <div className='cart__checkout' id="empty" >
                                <div className='cart__checkout__details'>
                                    <h4>Subtotal</h4>
                                    <h4>Price: ${ calculateTotal()}.00</h4>
                                </div>
                                <Link className={basket.length === 0 ? "cart__checkout__disabled" : "cart__checkout__button"} to='/checkout'>
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar