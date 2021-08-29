import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';
interface LoadingFragmentProps {
  height?: string;
  bg?: boolean;
}
const Container = styled.View<LoadingFragmentProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  ${props => props.height && 'height:' + props.height};
  ${props => props.bg && 'background-color:' + props.theme.colors.background};
`;

export const useActivityIndicator = (
  config: {
    defaultValue?: boolean;
  } = { defaultValue: true },
) => {
  const [loading, setLoading] = useState<boolean>(!!config.defaultValue);
  const theme = useTheme();

  const LoadingFragment: React.FC<LoadingFragmentProps> = ({
    children,
    ...rest
  }) => {
    return !loading ? (
      <>{children}</>
    ) : (
      <Container {...rest}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Container>
    );
  };

  return { LoadingFragment, loading, setLoading };
};
export default useActivityIndicator;
