import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  darkTheme,
  lightTheme,
  darkThemePaper,
  lightThemePaper,
} from './theme';
import { Provider as PaperProvider } from 'react-native-paper';

interface IThemeContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = React.createContext<IThemeContext>(
  {} as IThemeContext,
);
export const useThemeSelector = () => React.useContext(themeContext);

const FRMKThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <themeContext.Provider value={{ dark, setDark }}>
      <PaperProvider theme={dark ? darkThemePaper : lightThemePaper}>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </PaperProvider>
    </themeContext.Provider>
  );
};

export default FRMKThemeProvider;
