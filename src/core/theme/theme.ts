import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  DefaultTheme as DefaultThemePaper,
  DarkTheme as DarkThemePaper,
} from 'react-native-paper';

const baseTheme = {
  primary: '#11324D',
  secondary: '#d1ba69',
  card: '#11324D',
  background: '#fff',
  headerTexts: '#fff',
};
const darkThemeChanges = {
  secondary: '#E7E0C9',
  background: '#18191a',
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...baseTheme,
    ...darkThemeChanges,
  },
};
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...baseTheme,
  },
};

export const darkThemePaper = {
  ...DarkThemePaper,
  colors: {
    ...DarkThemePaper.colors,
    ...baseTheme,
    ...darkThemeChanges,
  },
};
export const lightThemePaper = {
  ...DefaultThemePaper,
  colors: {
    ...DefaultThemePaper.colors,
    ...baseTheme,
  },
};

export type ThemeType = typeof darkTheme;
