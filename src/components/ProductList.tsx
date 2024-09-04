import Link from 'next/link';

// Define the type for a single product
interface Product {
  id: number;
  name: string;
}

// Define the props type for the ProductList component
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
	<div>
	  {products.map((product) => (
		<div key={product.id}>
		  <Link href={`/product/${product.id}`}>
			<a>{product.name}</a>
		  </Link>
		</div>
	  ))}
	</div>
  );
};

export default ProductList;