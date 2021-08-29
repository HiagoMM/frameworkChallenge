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
    if (cart.find(p => p.id === product.id)) {
      setCart(
        cart.map(cartItem =>
          cartItem.id === product.id
            ? { ...cartItem, qtd: Number(cartItem.qtd) + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...product, qtd: 1 }]);
    }
  };

  const removeToCart = (product: Product) => {
    if (cart.find(p => p.id === product.id && Number(p?.qtd) > 1)) {
      setCart(
        cart.map(cartItem =>
          cartItem.id === product.id
            ? { ...cartItem, qtd: Number(cartItem.qtd) - 1 }
            : cartItem,
        ),
      );
    } else {
      setCart(cart.filter(item => item.id !== product.id));
    }
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
