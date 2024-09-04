import Navbar from '../../components/Navbar';
import ProductList from '../../components/ProductList';

// Define the type for a single product
interface Product {
  id: number;
  name: string;
  // Add other properties if needed
}

// Define the props type for the ProductPage component
interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  return (
	<div>
	  <Navbar />
	  <ProductList products={products} />
	</div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return {
	props: { products },
  };
}

export default ProductPage;