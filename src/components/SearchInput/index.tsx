import { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'src/assets/colors';
import SearchIcon from 'src/assets/icons/search.svg';
import useDebounce from 'src/hooks/useDebounce';

interface SearchInputProps {
  handleSearch: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ handleSearch, style }: SearchInputProps) => {
  const [search, setSearch] = useState<string>('');

  useDebounce(() => handleSearch(search), [search], 500);

  return (
    <View style={[styles.wrapper, style]}>
      <SearchIcon width={30} height={30} />
      <TextInput
        maxLength={30}
        allowFontScaling={false}
        value={search}
        onChangeText={value => {
          setSearch(value as string);
        }}
        enterKeyHint={'search'}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },
  input: {
    flex: 1,
  },
});
