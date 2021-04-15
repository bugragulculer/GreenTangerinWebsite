import React, { useState } from 'react'
import { CardElement, useStripe} from "@stripe/react-stripe-js";
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import ErrorMessage from './checkout/ErrorMessage'
import SubmitButton from './checkout/SubmitButton'
import Logo_Big from '../assets/Logo_Big.png'
import DoneIcon from '@material-ui/icons/Done';
import Field from "./checkout/Field"

 
function PaymentForm() {
  const [success, setSuccess] = useState(false)
  const [checkoutError, setCheckoutError] = useState();
  const [isProcessing, setProcessingTo] = useState(false);

  const basket = useSelector(state => state.basket)
  const stripe = useStripe()
 
  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };
    
  // Creating arrays which include products, colors and sizes
  let i = 0;
  let products = [];
  let colors = [];
  let sizes = [];
  for (i = 0; i < basket.length; i++) {
    products[i] = basket[i].id;
    colors[i] = basket[i].selectedColor;
    sizes[i] = basket[i].selectedSize;
  }

  const handleFormSubmit = async (e) => {
    setProcessingTo(true);
    // Getting the address details
    const billingDetails = {
      email: e.target.email.value,
      name: e.target.name.value,
      address: {
        line1: e.target.address.value,
        city: e.target.city.value,
        state: e.target.state.value,
        postal_code: e.target.zip.value,
        country: e.target.country.value
      }
    }

    setSuccess(true)
    setProcessingTo(false)
  }
  
  const calculateProductTotal = () => {
    const result = basket.map(product => product.price * product.number).reduce((a, b) => a + b);
    const total = result;
  return total;
  };

  const calculateTotal = () => {
		const result = basket.map(product => product.price * product.number).reduce((a, b) => a + b);
    const total = result;
	return total;
  };

  const iframeStyles = {
    base: {
      color: "#242424",
      fontSize: "16px",
      iconColor: "#555",
      "::placeholder": {
        color: "#aaa"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "ffc7ee"
    },
    complete: {
      iconColor: "cbf4c9"
    }
  }
  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };
  
  return (    
    <>
      {!success ?
        <div className='checkout'>
          {/* Main Logo */}
          <Link className='checkout__main__logo' src={Logo_Big} to="/">
            <img src={Logo_Big} alt="" className='checkout__main__logo' />
          </Link>
          <h1 className='checkout__demo'> This is a Demo version. Nothing will be submitted.</h1>
          {/* Checkout Form Part */}
          <div className='checkout__container'>
            <form className='checkout__form' onSubmit={handleFormSubmit}>
              <fieldset className='checkout__form__group'>
                <Field label="Full Name"  name="name" id="name" type="text" placeholder="Jane Doe" required autoComplete="name"/>
                <Field label="Email" name="email" id="email" type="text" placeholder="janedoe@gmail.com" required autoComplete="email" />
                <Field label="Address" name="address" id="address" type="text" placeholder="Jane Doe" required autoComplete="10955 N Tantau Ave" />
                <Field label="City" name="city" id="city" type="text" placeholder="Cupertino" required autoComplete="city" />
                <Field label="State" name="state" id="state" type="text" placeholder="California" required autoComplete="state"/>
                <Field label="Postal Code" name="zip" id="zip" type="number" placeholder="95014" required autoComplete="postal code"/>
                <Field label="Country" name="country"id="country" type="text" placeholder="US (Use Two letter Codes ie. US, GB )" required autoComplete="country" />
              </fieldset>
              <fieldset className='checkout__form__group'>
                <label className='checkout__field__label'>Card Details (You don't have to give card info) </label>
                <div className="checkout__cardfield">
                  <CardElement
                    options={ cardElementOpts }
                    onChange={ handleCardDetailsChange}
                    className='checkout__cardfield__form'
                  disabled />
                </div>
              </fieldset>
              {checkoutError && <ErrorMessage>{checkoutError}</ErrorMessage>}
              <SubmitButton disabled={success || !stripe}>
                {isProcessing ? "Processing..." : `Pay $${calculateTotal(basket)}`}
              </SubmitButton>
            </form>
            {/* Checkout Details Part */}
            <div className='checkout__details__container'>
              <h1 className='checkout__header'>Items in Order</h1>
              <div className='checkout__divider'/>
                {basket.map((product, i) => (
                  <div key={ i }>
                    <div className='checkout__details'>
                      <img className='checkout__product__image' src={product.fields.images[0].url} alt={product.fields.title} style={{cursor: "default"}}/>
                      <div className='checkout__details__wrapper'>
                        <p className='checkout__product__title'>{ product.fields.title }</p>
                        <p className='checkout__product__detail'>Quantity: { product.number }</p>
                        <p className='checkout__product__detail'>Size: { product.selectedSize }</p>
                        <p className='checkout__product__detail'>Color: { product.selectedColor }</p>
                      </div >
                      <p className='checkout__product__detail checkout__product__price'>${ product.price }.00</p>
                    </div>
                  </div>
                ))}
              <div className='checkout__order__summary'>
                <h1 className='checkout__header'>Order Summary</h1>
                <div className='checkout__divider'/>
                  <div className='checkout__summary__container'>
                    <div className='checkout__summary__row'>
                      <p className='checkout__product__detail--small'>Subtotal</p>
                      <p className='checkout__product__detail--small--bold'>$ { calculateProductTotal(basket)  }.00</p>
                    </div>
                  <div className='checkout__summary__row'>
                    <p className='checkout__product__detail--small'>Shipping</p>
                    <p className='checkout__product__detail--small--bold'>$ { calculateTotal(basket) }.00</p>
                  </div>
                  <div className='checkout__summary__row'>
                    <p className='checkout__product__detail--big--bold'>Total</p>
                    <p className='checkout__product__detail--big--bold'>$ { calculateTotal(basket) }.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        // After a successful payment, success state will open.
        <div className='payment__success'>
          <DoneIcon className='done__icon' />
          <h2 className='payment__header'>Your Payment is Successful.</h2>
          <p className='payment__desc'>Of course this is a demo. Nothing has been deposited.</p>
          <Link to='/' className='secondary__button'>Back to Home</Link>
          <div>
          </div>
            {basket.map((e) => (
              e.fields.Types === "Digital" && (
                <div className="digital__downloads" key={e.fields.title}>
                  <div className='divider'/>
                  <div className='payment__success__download'>
                    <img src={e.fields.images[0].url} alt={e.fields.title} />
                    <div className='payment__download__info'>
                      <h3 className='download__header'>{e.fields.title} with {e.selectedColor} and { e.selectedSize } options</h3>
                      <a className='download__button' href={e.fields.download[0].url} download>Download</a>
                    </div> 
                  </div>
                </div>
              )
            ))}
        </div>   
      }    
    </>
  )
}

export default PaymentForm