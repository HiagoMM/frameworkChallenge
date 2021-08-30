import React from 'react';
import CartContextProvider from './src/core/contexts/cart.context';
import Routes from './src/core/routes/routes.config';
import FRMKThemeProvider from './src/core/theme/theme-provider';
import UserContextProvider from './src/core/contexts/user.context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeConsumer } from 'styled-components/native';
import SearchContextProvider from './src/core/contexts/search-bar.context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <FRMKThemeProvider>
      <ThemeConsumer>
        {theme => (
          <>
            <StatusBar backgroundColor={theme.colors.card} />
            <NavigationContainer theme={theme}>
              <SearchContextProvider>
                <UserContextProvider>
                  <CartContextProvider>
                    <Routes />
                  </CartContextProvider>
                </UserContextProvider>
              </SearchContextProvider>
            </NavigationContainer>
          </>
        )}
      </ThemeConsumer>
    </FRMKThemeProvider>
  );
};

export default App;
