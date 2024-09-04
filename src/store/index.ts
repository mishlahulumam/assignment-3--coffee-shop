import { atom } from 'jotai';

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

// Define the cart atom with the correct type
export const cartAtom = atom<CartItem[]>([]);