import { useAtom } from 'jotai';
import Link from 'next/link';
import { cartAtom } from '../store';

const MiniCart = () => {
  const [cart] = useAtom(cartAtom);
  return (
	<div>
	  <Link href="/cart">Cart ({cart.length})</Link>
	</div>
  );
};

export default MiniCart;