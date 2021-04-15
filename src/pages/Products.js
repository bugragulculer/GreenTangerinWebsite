import ProductsSidebar from '../components/ProductsSidebar'
import useScrollTop from '../hooks/useScrollTop'
import ProductsList from '../components/ProductsList'
import '../styles/Products.css'
import { useSelector } from 'react-redux'

function Products(props) {
    // Scrolling to the top
    useScrollTop();

    // Getting current basket data
    const store = useSelector(state => ({
        filter: state.filter,
        basket: state.basket,
    }))
    
    return (
        <div>
            <h1 className='products__header'>Products</h1>
            <div className='products__wrapper'>
                <ProductsSidebar {...props} filter={ store.filter }/>
                <ProductsList {...props} filter={ store.filter }/>
            </div>
        </div>
    );
}

export default Products
