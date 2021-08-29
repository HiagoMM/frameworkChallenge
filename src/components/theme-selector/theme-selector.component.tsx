import React from 'react';

import { useThemeSelector } from '../../core/theme/theme-provider';
import { IconButton } from 'react-native-paper';
import { useTheme } from 'styled-components';

const ThemeSelector: React.FC = () => {
  const { setDark, dark } = useThemeSelector();
  const {
    colors: { headerTexts },
  } = useTheme();
  return (
    <IconButton
      icon={dark ? 'brightness-5' : 'brightness-4'}
      onPress={() => setDark(!dark)}
      color={headerTexts}
    />
  );
};

export default ThemeSelector;
