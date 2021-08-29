import React, { useState } from 'react';

interface ISearchContext {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const searchContext = React.createContext<ISearchContext>({} as any);

export const useSearchContext = () => React.useContext(searchContext);

const SearchContextProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
