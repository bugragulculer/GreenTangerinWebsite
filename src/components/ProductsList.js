import React from 'react'
import ProductsComponent from '../components/ProductsComponent'
import '../styles/ProductsList.css'
import { useSelector } from 'react-redux'
import { selectFilter } from '../selectors/selector'
import NoProductsMessage from './NoProductsMessage'

function ProductsList(props) {
    // Getting the store data which includes basket, filter and filtered products. 
    const store = useSelector(state => ({
        filter: state.filter,
        basket: state.basket,
        filteredProducts: selectFilter(props.products, state.filter)
    }))
    
    return (
        <div className='products__product__wrapper'>
            {store.filteredProducts.length === 0 ? (
                <NoProductsMessage />
            ) : (store.filteredProducts.map((e) => (
                <ProductsComponent product={e.fields} className='products' key={e.id} />
            )))}
        </div>
    )
}
export default ProductsList
