import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'src/assets/colors';
import Text from 'src/components/Text';
import products from 'src/content/products.json';
import ProductCard from 'src/features/components/ProductCard';
import { useOrientation } from 'src/hooks/useOrientation';
import { Orientation, TextVariant } from 'src/types/common';

const ProductList = () => {
  const { orientation } = useOrientation();
  const listKey = orientation === Orientation.Landscape ? 2 : 1;

  return (
    <SafeAreaView style={styles.container}>
      <Text color={colors.primary} size={20} weight={TextVariant.Bold}>
        Products
      </Text>
      <FlatList
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
    gap: 8,
  },
  columnStyle: {
    gap: 8,
  },
  productCard: {
    marginBottom: 8,
  },
});
