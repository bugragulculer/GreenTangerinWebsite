import { Elements } from '@stripe/react-stripe-js'
import useScrollTop from '../hooks/useScrollTop'
import { loadStripe} from '@stripe/stripe-js'
import CheckoutComponent from '../components/CheckoutComponent'
import '../styles/Checkout.css'

const MainPage = props => {
    // Scrolling to the top
    useScrollTop();
    
    // Load Stripe Public key
    const stripePromise = loadStripe('STRIPE_PUBLIC_API_KEY')

    return (
        <Elements stripe={ stripePromise }>
            <CheckoutComponent {...props}/>
        </Elements>
  );
};

export default MainPage;

