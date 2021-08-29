import React from 'react';
import { Input } from './search-input.styles';
import { TextInputProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSearchContext } from '../../core/contexts/search-bar.context';

const SearchInput: React.FC<TextInputProps> = props => {
  const theme = useTheme();
  const { search, setSearch } = useSearchContext();
  return (
    <Input
      value={search}
      onChangeText={text => setSearch(text)}
      autoFocus
      {...props}
      selectionColor={theme.colors.text}
    />
  );
};

export default SearchInput;
