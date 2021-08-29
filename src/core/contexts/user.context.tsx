import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface User {
  email: string;
  password: string;
  name: string;
  picture: string;
}
interface IUserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: String | null;
  setToken: React.Dispatch<React.SetStateAction<String | null>>;
  logout: () => void;
}

const userContext = React.createContext<IUserContext>({} as any);

export const useUser = () => React.useContext(userContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<String | null>(null);
  const navigation = useNavigation();
  const logout = () => {
    setUser(null);
    setToken(null);
    navigation.navigate('sign-in');
  };

  return (
    <userContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
