import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'src/assets/colors';
import EmptySearch from 'src/assets/icons/empty-search.svg';
import EmptyState from 'src/components/EmptyState';
import SearchInput from 'src/components/SearchInput';
import Text from 'src/components/Text';
import ProductCard from 'src/features/components/ProductCard';
import { useOrientation } from 'src/hooks/useOrientation';
import { searchInProducts } from 'src/store/reducers/productSlice';
import { filteredProducts } from 'src/store/selectors/productSelector';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { Orientation, TextVariant } from 'src/types/common';
import SortingButton from './components/SortingButton';

const ProductList = () => {
  const products = useAppSelector(filteredProducts);
  const { orientation } = useOrientation();
  const dispatch = useAppDispatch();

  const listKey = orientation === Orientation.Landscape ? 2 : 1;

  const searchHandler = (value: string) => {
    if (value.length >= 3) {
      dispatch(searchInProducts(value));
    } else {
      dispatch(searchInProducts(''));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text color={colors.primary} size={20} weight={TextVariant.Bold}>
        Products
      </Text>

      <View style={styles.actionButtonsRow}>
        <SearchInput handleSearch={searchHandler} />
        <SortingButton />
      </View>

      <FlatList
        ListEmptyComponent={() => (
          <EmptyState
            icon={<EmptySearch width={800} height={300} />}
            title="No Result"
            subtitle="Please try another product"
          />
        )}
        key={listKey}
        keyExtractor={item => item.id.toString()}
        numColumns={listKey}
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.list}
        columnWrapperStyle={listKey > 1 ? styles.columnStyle : undefined}
        removeClippedSubviews={true}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    gap: 16,
    width: '100%',
  },
  list: {
    gap: 10,
  },
  columnStyle: {
    gap: 8,
  },
  productCard: {
    marginBottom: 8,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
