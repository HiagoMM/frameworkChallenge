import DashedLine from 'react-native-dashed-line';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  min-height: 90px;
  overflow: hidden;
`;

export const CouponImage = styled.Image`
  height: 100%;
  width: 33%;
  resize-mode: contain;
`;

export const TextContainer = styled.View`
  width: 22%;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
`;

export const CouponText = styled(Text)<{ bold?: boolean }>`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Title = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  padding: 6px;
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InternContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 10px 0px;
`;

export const StyledDashedLine = styled(DashedLine).attrs(({ theme }) => ({
  dashColor: theme.colors.secondary,
}))`
  margin: 3px 20px;
`;
export const QtdControler = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
