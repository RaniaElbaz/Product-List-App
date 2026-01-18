import { FlashList } from '@shopify/flash-list';
import React, { Activity, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'src/assets/colors';
import DeleteBin from 'src/assets/icons/delete-bin.svg';
import EmptySearch from 'src/assets/icons/empty-search.svg';
import Button from 'src/components/Button';
import EmptyState from 'src/components/EmptyState';
import SearchInput from 'src/components/SearchInput';
import Text from 'src/components/Text';
import ProductCard from 'src/features/components/ProductCard';
import SortingButton from 'src/features/components/SortingButton';
import { useOrientation } from 'src/hooks/useOrientation';
import {
  deleteSelectedProducts,
  productsData,
  searchInProducts,
  selectProducts,
} from 'src/store/reducers/productSlice';
import { filteredProducts } from 'src/store/selectors/productSelector';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { Orientation, TextVariant } from 'src/types/common';
import { productType } from 'src/types/features/products';

const ProductList = () => {
  const products = useAppSelector(filteredProducts);
  const { selectedIds } = useAppSelector(productsData);
  const { orientation } = useOrientation();
  const dispatch = useAppDispatch();

  const numColumns = orientation === Orientation.Landscape ? 2 : 1;
  const showDeleteOptions =
    selectedIds && selectedIds.length > 0 ? 'visible' : 'hidden';

  const searchHandler = (value: string) => {
    let key = value.trim();
    if (key.length >= 3) {
      dispatch(searchInProducts(key));
    } else {
      dispatch(searchInProducts(''));
    }
  };
  const onSelectProduct = (id: number | undefined) => {
    if (id) {
      dispatch(selectProducts(id));
    }
  };
  const deleteProducts = () => {
    dispatch(deleteSelectedProducts());
  };

  const renderItem = useCallback(
    ({ item }: { item: productType }) => (
      <ProductCard
        product={item}
        onSelectProduct={onSelectProduct}
        style={{ marginRight: numColumns > 1 ? 10 : 0, marginBottom: 8 }}
      />
    ),
    [onSelectProduct, numColumns],
  );
  const overrideItemLayout = useCallback(
    (layout: { span?: number | undefined }) => {
      layout.span = 1;
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionsWrapper}>
        <Text color={colors.primary} size={20} weight={TextVariant.Bold}>
          Products
        </Text>
        <View style={styles.actionButtonsRow}>
          <SearchInput handleSearch={searchHandler} />
          <SortingButton />
        </View>

        <View style={styles.deleteRow}>
          <Activity mode={showDeleteOptions}>
            <Text size={12} color={colors.delete} weight={TextVariant.SemiBold}>
              {selectedIds?.length} item(s) selected
            </Text>
            <Button variant="outlined" onPress={deleteProducts}>
              <DeleteBin width={16} height={16} fill={colors.delete} />
            </Button>
          </Activity>
        </View>
      </View>

      <FlashList
        ListEmptyComponent={() => (
          <EmptyState
            icon={<EmptySearch width={800} height={300} />}
            title="No Result"
            subtitle="Please try another product"
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        data={products}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        overrideItemLayout={overrideItemLayout}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    gap: 10,
    width: '100%',
  },
  list: {
    paddingHorizontal: 17,
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
  deleteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 30,
  },
  actionsWrapper: {
    borderBottomWidth: 1,
    elevation: 1,
    backgroundColor: colors.background,
    borderBottomColor: colors.greyish,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  separator: {
    height: 8,
  },
});
