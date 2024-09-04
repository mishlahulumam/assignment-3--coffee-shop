import Link from 'next/link';
import MiniCart from './MiniCart'; // Ensure this matches the corrected file name

const Navbar = () => {
  return (
	<nav>
	  <Link href="/">Home</Link>
	  <Link href="/product">Products</Link>
	  <MiniCart />
	</nav>
  );
};

export default Navbar;