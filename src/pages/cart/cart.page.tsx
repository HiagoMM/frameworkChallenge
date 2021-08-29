import React from 'react';
import { useCart } from '../../core/contexts/cart.context';
import {
  Container,
  ItensContainer,
  TotalContainer,
  TotalText,
  BuyButton,
} from './cart.styles';
import CartCoupon from '../../components/cart-coupon/cart-coupon.component';
import { Divider } from 'react-native-paper';
import { View } from 'react-native';

const Cart: React.FC = () => {
  const { cart } = useCart();

  const getTotal = () => {
    return cart.reduce((acc, cur) => acc + cur.price * Number(cur.qtd), 0);
  };

  return (
    <Container>
      <ItensContainer>
        {cart.map((product, index) => (
          <View key={product.id}>
            <CartCoupon {...product} />
            {index + 1 !== cart.length && <Divider />}
          </View>
        ))}
      </ItensContainer>
      <TotalContainer>
        <TotalText>Frete: R$ 10.00</TotalText>
        <Divider />
        <TotalText>Total: R$ {getTotal().toFixed(2)}</TotalText>
      </TotalContainer>
      <BuyButton icon="cart" mode="contained">
        FINALIZAR
      </BuyButton>
    </Container>
  );
};

export default Cart;
