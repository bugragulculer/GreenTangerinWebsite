// Creating the Product Details page.
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/actions/basketActions'
import { displayActionMessage} from '../helpers/utilities'
import Lightbox from '../components/ProductLightbox'
import useDocumentTitle from '../hooks/useDocumentTitle'
import NewsletterForm from './NewsletterFormSmall'
import '../styles/ProductDetails.css'



function ProductDetails(props) {
    // Getting products data and getting the specific data.
    const dispatch = useDispatch()
    const id = props.id.slug
    const products = props.products
    const product = products.find(e => e.fields.url === id)

    // Updating the selected color, size, quantity and price
    const [selectedColor, setColor] = useState([])
    const [selectedSize, setSize] = useState([])
    const [number, setNumber] = useState(1)
    const [price, setPrice] = useState("--")

    useEffect(() => {
        setColor([]);
        setSize([]);
        setNumber(1);
        setPrice(["--"]);
    }, [id])

    // Changing the document title
    useDocumentTitle (`${product ? product.fields.title: 'Item'}`)
    
    // Adding the current product to the cart. 
    const onAddToBasket = () => {
        if (selectedColor.length === 0 || selectedSize.length ===0 ) {
            displayActionMessage("Please select size and color options", "toast-error")
        } else {
            dispatch(addToBasket({ ...product, selectedColor, selectedSize, number, price }))
            displayActionMessage('Item Added to Cart', 'success')
        }
    };
    
    function onChange(e) {
        setNumber(e.target.value);
    }
    
    useEffect(() => {
        if (selectedSize === "16x20 in") {
            setPrice(product.fields.Price1)
        }
        if (selectedSize === "18x24 in") {
            setPrice(product.fields.Price2)
        }
        if (selectedSize === "30x40 cm") {
            setPrice(product.fields.Price3)
        }
        if (selectedSize === "50x70 cm") {
            setPrice(product.fields.Price4)
        }
        if (selectedSize === "Mobile") {
            setPrice(product.fields.Price5)
        }
        if (selectedSize === "Digital Poster") {
            setPrice(product.fields.Price6)
        } else {
            return "There has been a problem"
        }
    }, [selectedSize])

    return <div className='product__container'>
        {products.map((e) => (e.fields.url === id &&
            <div className='product__header' key={e.id}>
            <div className='product__image__wrapper' style={{ backgroundColor: e.fields.background }}>
                <img className='product__image' src={e.fields.images[0].url} alt='f1_circuits' />
            </div>
            
            <div className='product__details'>
                <div className='product__lightbox'>
                    <Lightbox {...props} product={e} />
                </div>
                <div className='product__gradient'>
                    <div className='product__half'>
                        <h1 className='product__h1'>{e.fields.title}</h1>
                        <p className='product__h2'>{e.fields.description}</p>
                        {e.fields.type === "Freebie" && (
                            <div className = 'product__button__freebie__container'>
                                <a className='product__button__freebie' href={e.fields.download[0].url}>Download</a>
                            </div>

                        )}
                        {e.fields.Types.toLowerCase() === "printed" && (
                            <div className='product__details__desc'>
                                <p>Our minimalist posters will add a beautiful touch to your space. This is a printed product and the frame is not included. Our Museum-quality posters made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment.</p>
                                <ul className='list'>
                                    <p>• Paper thickness: 10.3 mil</p>
                                    <p>• Paper weight: 5.6 oz/y² (192 g/m²)</p>
                                    <p>• Giclée printing quality</p>
                                    <p>• Opacity: 94%</p>
                                </ul>
                                <p>© This design is copyright of GreenTangerin. You may not copy or reproduce this product. Although sharing is encouraged</p>
                            </div>
                        )}
                        {e.fields.Types.toLowerCase() === "digital" && (
                            <div className='product__details__desc'>
                                <p>**This listing is for an INSTANT DOWNLOADIt is a printable, digital file (no physical product will be shipped)</p>
                                <p>Our minimalist posters will add a beautiful touch to your space and devices. This is a digital product.</p>
                                <p>Files will be sent after purchase via e-mail. Please allow up to 10 minutes for your payment to process and mail to be sent. In any problem please send an email to contact@greentangerin.com</p>
                                <p>No physical items will be shipped. All files are sent electronic</p>
                                <p>What you will get?</p>
                                <p>In Mobile Type</p>
                                <ul className="list">
                                    <p>• 4K Desktop Wallpaper</p>
                                    <p>• iPad Wallpaper</p>
                                    <p>• iPhone Wallpaper</p>
                                </ul>
                                <p>In Digital Poster Type</p>
                                <ul className="list">
                                    <p>• Print-Ready 50x70 cm Poster File</p>
                                </ul>
                                <p>You can immediately access your DOWNLOAD DIGITAL FILES after placing your payment for you to print at home or take them to a local print shop, you could also upload the files to an online printing service.</p>
                                <p>If you need another size, I can resize the printable without additional cost. Just send me an mail at contact@greentangerin.com.</p>
                                <p>© This design is copyright of GreenTangerin. You may not copy or reproduce this product. Although sharing is encouraged</p>

                            </div>
                        )}
                    </div>
                    <div className='product__half '>
                        {e.fields.type === "Freebie" ? (
                            <NewsletterForm />
                        ) : (
                                <div className='product__right'>   
                                    <p className='product__variant__title'>Colors</p>
                                    <form className='product__variants'>
                                        {e.fields.color.map((color) => (
                                            <label className='sort__wrapper' key={color}>
                                                    <input type="radio" value={color} required readOnly checked={color === selectedColor} className='products__sort__checkbox' id={color} name="color" onClick={() => setColor(color)} />
                                                    <span className='sort__checkmark' />
                                                    <p className='sort__title'>{ color}</p>
                                                </label>
                                            ))}
                                    </form>
                                    <p className='product__variant__title'>Sizes</p>
                                    <form className='product__variants'>
                                        {e.fields.size.map((size) => (
                                            <label className='sort__wrapper' key={size}>
                                                <input type="radio"  value={size} required readOnly checked={size === selectedSize} className='products__sort__checkbox' id={size} name="color" onClick={() => setSize(size)} />
                                                <span className='sort__checkmark' />
                                                <p className='sort__title'>{size}</p>
                                            </label>
                                        ))}
                                    </form>
                                    <div className='product__variants__buy'>
                                        <div className='product__variants'>
                                            <div>
                                                <p className='product__variants__price'>${ price }.00</p>
                                            </div>
                                            { e.fields.type === "Printed" ? <input className='product__variants__number__price' value={number} type="number" max='20' min='1' id='variant__id' onChange={onChange}/> : ""}
                            
                                        </div>
                                            <button className='product__button' onClick={ onAddToBasket }>Add to Cart</button>  

                                    </div>
                                </div>
                            )
                        }    
                    </div>
                </div>
            </div>
            </div>
        ))}
    </div>
}
                
export default ProductDetails