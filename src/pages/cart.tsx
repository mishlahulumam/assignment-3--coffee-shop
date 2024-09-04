import { useAtom } from 'jotai';
import { cartAtom } from '../store';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const [cart] = useAtom(cartAtom);

  return (
	<div>
	  <Navbar />
	  <h1>Cart</h1>
	  {cart.map((item, index) => (
		<div key={index}>
		  <p>{item.name}</p>
		  <p>Quantity: {item.quantity}</p>
		</div>
	  ))}
	</div>
  );
};

export default CartPage;