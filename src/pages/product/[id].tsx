import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { cartAtom } from '../../store';
import { getSession } from 'next-auth/react';
import Navbar from '../../components/Navbar';

// Define the type for a single product
interface Product {
    id: number;
    name: string;
    description: string;
    // Add other properties if needed
}

// Define the type for a cart item
interface CartItem extends Product {
    quantity: number;
}

// Define the props type for the ProductDetail component
interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useAtom<CartItem[]>(cartAtom);
    const router = useRouter();

    const handleAddToCart = async () => {
        const session = await getSession();
        if (!session) {
            router.push('/login');
            return;
        }
        setCart([...cart, { ...product, quantity }]);
    };

    return (
        <div>
            <Navbar />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export async function getServerSideProps(context: { params: { id: string } }) {
    const { id } = context.params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return {
        props: { product },
    };
}

export default ProductDetail;