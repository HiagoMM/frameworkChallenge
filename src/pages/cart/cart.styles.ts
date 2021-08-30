import styled from 'styled-components/native';
import { Button, Surface } from 'react-native-paper';
import { Text } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  flex: 1;
  margin: 5%;
`;

export const ItensContainer = styled(Surface)`
  min-height: 68%;
  margin-bottom: 2%;
  elevation: 5;
  border-radius: 5px;
`;

export const TotalContainer = styled(Surface)`
  padding: 10px;
  elevation: 5;
  margin-bottom: 2%;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TotalText = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const BuyButton = styled(Button)`
  height: 8%;
  align-items: center;
  justify-content: center;
`;

export const CartEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextEmptyCart = styled(Text)`
  font-size: 40px;
`;
