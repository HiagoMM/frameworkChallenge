import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import CustomTextInput from '../../components/custom-text-input/custom-text-input.component';
export const Container = styled.View`
  justify-content: flex-end;
  flex: 1;
  padding-bottom: 10%;
`;

export const InsideContainer = styled.View`
  justify-content: space-evenly;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled(Animatable.Text)<{ end?: boolean }>`
  padding: 10px 0px;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.colors.text};
`;

export const StyledTextInput = styled(CustomTextInput)`
  margin-bottom: 10px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const BottomFruits = styled(Animatable.Image)`
  position: absolute;
  width: 100%;
  top: -40px;
  right: 0;
  z-index: -1;
`;
