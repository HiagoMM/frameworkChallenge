import React, { useState } from 'react';
import { Product } from '../../models/product.model';

interface ICartContext {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeToCart: (product: Product) => void;
  clearCart: () => void;
}

const cartContext = React.createContext<ICartContext>({} as any);

export const useCart = () => React.useContext(cartContext);

const CartContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeToCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeToCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
