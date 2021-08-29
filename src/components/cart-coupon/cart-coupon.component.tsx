import React from 'react';
import * as Animatable from 'react-native-animatable';
import { IconButton } from 'react-native-paper';
import { useCart } from '../../core/contexts/cart.context';
import { Product } from '../../models/product.model';
import {
  Container,
  CouponImage,
  CouponText,
  InternContainer,
  QtdControler,
  TextContainer,
} from './cart-coupon.styles';

const CartCoupon: React.FC<Product> = props => {
  const { image, name, price, qtd } = props;

  const { removeToCart, addToCart } = useCart();

  return (
    <Animatable.View>
      <Container>
        <InternContainer>
          <CouponImage source={{ uri: image }} />
          <TextContainer>
            <CouponText bold>{name}</CouponText>
            <QtdControler>
              <IconButton
                icon="chevron-down"
                size={18}
                color="red"
                onPress={() => removeToCart(props)}
              />
              <CouponText>{qtd}</CouponText>
              <IconButton
                icon="chevron-up"
                color="lime"
                size={20}
                onPress={() => addToCart(props)}
              />
            </QtdControler>
          </TextContainer>
          <TextContainer>
            <CouponText bold>Valor</CouponText>
            <CouponText>R$ {price.toFixed(2)}</CouponText>
          </TextContainer>
          <TextContainer>
            <CouponText bold>Total</CouponText>
            <CouponText>R$ {(price * Number(qtd)).toFixed(2)}</CouponText>
          </TextContainer>
        </InternContainer>
      </Container>
    </Animatable.View>
  );
};

export default CartCoupon;
