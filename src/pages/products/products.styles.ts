import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { paddingBottom: 20 },
}))``;

export const TitleText = styled(Text)`
  font-size: 26px;
`;
