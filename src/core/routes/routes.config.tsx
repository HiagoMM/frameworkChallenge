import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { useTheme } from 'styled-components';
import HomeAvatar from '../../components/home-avatar/home-avatar.component';
import ThemeSelector from '../../components/theme-selector/theme-selector.component';
import Home from '../../pages/home/home.page';
import SignIn from '../../pages/sign-in/sign-in.page';
import { useUser } from '../contexts/user.context';
import SearchInput from '../../components/search-input/search-input.component';
import { useSearchContext } from '../contexts/search-bar.context';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const theme = useTheme();
  const { user, logout } = useUser();
  const [searchMode, setSearchMode] = useState(false);
  const { setSearch } = useSearchContext();

  const homeOptions = searchMode
    ? {
        headerBackVisible: false,
        title: ``,
        headerLeft: () => <SearchInput />,
        headerRight: () => (
          <IconButton
            color={theme.colors.headerTexts}
            icon="close"
            onPress={() => {
              setSearchMode(false);
              setSearch('');
            }}
          />
        ),
      }
    : {
        headerTintColor: theme.colors.headerTexts,
        title: `Olá, ${user?.name}`,
        headerBackVisible: false,
        headerLeft: () => <HomeAvatar source={{ uri: user?.picture }} />,
        headerRight: () => (
          <>
            <IconButton
              color={theme.colors.headerTexts}
              icon="magnify"
              onPress={() => setSearchMode(true)}
            />
            <ThemeSelector />
            <IconButton
              color={theme.colors.headerTexts}
              icon="logout"
              onPress={logout}
            />
          </>
        ),
      };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sign-in"
        options={{ headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen name="home" component={Home} options={homeOptions} />
    </Stack.Navigator>
  );
};

export default Routes;
