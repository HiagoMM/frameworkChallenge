import React from 'react';
import { Button } from 'react-native-paper';
import { Product } from '../../models/product.model';
import { useCart } from '../../core/contexts/cart.context';
import {
  Container,
  CouponImage,
  TextContainer,
  InternContainer,
  Title,
  CouponText,
  StyledDashedLine,
} from './coupon.styles';
import * as Animatable from 'react-native-animatable';

const Coupon: React.FC<Product> = props => {
  const { image, name, price, description, order } = props;
  const { addToCart } = useCart();
  return (
    <Animatable.View animation="zoomIn" delay={order * 300}>
      <Container>
        <Title>{description}</Title>
        <StyledDashedLine dashLength={5} />
        <InternContainer>
          <CouponImage source={{ uri: image }} />
          <TextContainer>
            <CouponText bold>
              Oferta imperdível de {name} por apenas R$ {price.toFixed(2)}
            </CouponText>
            <CouponText>Válido até 15/12/2021</CouponText>
          </TextContainer>
        </InternContainer>
        <Button mode="contained" onPress={() => addToCart(props)}>
          Adicionar ao carrinho
        </Button>
      </Container>
    </Animatable.View>
  );
};

export default Coupon;
