import { useAtom } from 'jotai';
import { cartAtom } from '../store';
import Navbar from '../components/Navbar';

const CheckoutPage = () => {
  const [cart] = useAtom(cartAtom);

  return (
	<div>
	  <Navbar />
	  <h1>Checkout</h1>
	  {cart.map((item, index) => (
		<div key={index}>
		  <p>{item.name}</p>
		  <p>Quantity: {item.quantity}</p>
		</div>
	  ))}
	  <button onClick={() => alert('Order placed!')}>Place Order</button>
	</div>
  );
};

export default CheckoutPage;