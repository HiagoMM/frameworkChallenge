import React from 'react';
import { Alert } from 'react-native';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import CartCoupon from '../../components/cart-coupon/cart-coupon.component';
import { useCart } from '../../core/contexts/cart.context';
import { createPDF } from '../../core/services/cart.service';
import { useNavigation, useTheme } from '@react-navigation/native';
import { CartEmpty, TextEmptyCart } from './cart.styles';
import {
  BuyButton,
  Container,
  ItensContainer,
  TotalContainer,
  TotalText,
} from './cart.styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigation = useNavigation();
  const theme = useTheme();
  const getTotal = () => {
    return cart.reduce((acc, cur) => acc + cur.price * Number(cur.qtd), 0) + 10;
  };

  const handleFinish = async () => {
    Alert.alert(
      'Compra finalizada com sucesso 😁',
      'A nota fiscal será adicionada aos seus documentos',
      [
        {
          text: 'Cancelar',
        },
        {
          onPress: () => {
            createPDF(cart, getTotal());
            clearCart();
            navigation.navigate('products');
          },
          text: 'Ok',
        },
      ],
    );
  };

  return (
    <Container useNativeDriver animation="slideInUp">
      {!cart.length ? (
        <CartEmpty>
          <Icon name="cart" size={140} color={theme.colors.text} />
          <TextEmptyCart>Carrinho vazio 😢</TextEmptyCart>
        </CartEmpty>
      ) : (
        <>
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
          <BuyButton icon="cart" mode="contained" onPress={handleFinish}>
            FINALIZAR
          </BuyButton>
        </>
      )}
    </Container>
  );
};

export default Cart;
