import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FeaturedProducts from '../components/FeaturedProducts'
import ProductDetails from '../components/ProductDetails' 
import useScrollTop from '../hooks/useScrollTop'

function ViewProduct(props) {
    // Scrolling to the top.
    useScrollTop();
    
    // Getting the final part of the url.
    const id = useParams();
    
    // Changing the product doesn't make the page scroll to the top. That is why below useEffect will be used.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    return (
        <div>
            <ProductDetails {...props} id={ id }/>
            <FeaturedProducts {...props} />
        </div>

    )
}


export default ViewProduct
