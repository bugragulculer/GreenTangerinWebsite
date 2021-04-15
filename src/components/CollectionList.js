import React from 'react'
import ProductsComponent from '../components/ProductsComponent'
import NoProductsMessage from '../components/NoProductsMessage'
import '../styles/CollectionList.css'

function CollectionList(props) {
    // Getting the products info
    const products = props.products;
    // Creating a showProducts if the current type or category equals to the products types or categories. 
    const showProducts = []
    for (let i = 0; i < products.length; i++) {
        if (products[i].fields.Types.toLowerCase() === props.id || products[i].fields.Collections.toLowerCase() === props.id) {
            showProducts.push(products[i])
        }
    }
    return (
        <div className='products__product__wrapper__collection'>
            <h1 className='products__product__h1'>{props.id[0].toUpperCase() + props.id.substring(1)} Illustrations</h1>
            <div className='products__wrapper__collection'>
            {showProducts.length === 0 ? <NoProductsMessage /> : showProducts.map((e) => (
                (((e.fields.Types.toLowerCase() === props.id || e.fields.Collections.toLowerCase() === props.id) && (
                    <ProductsComponent product={e.fields} className='products' key={e.id} />
                )
                )) 
            ))}
            </div>

        </div>
    )
}
export default CollectionList
