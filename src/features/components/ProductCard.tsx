import FastImage from '@d11/react-native-fast-image';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from 'src/assets/colors';
import Image from 'src/components/Image';
import Text from 'src/components/Text';
import { TextVariant } from 'src/types/common';
import { productType } from 'src/types/features/products';

type ProductCardProps = {
  product?: productType;
  style?: StyleProp<ViewStyle>;
};

const ProductCard = ({ product, style }: ProductCardProps) => {
  const { description, title, image, price } = product || {};

  return (
    <View style={[styles.card, style]}>
      <Image
        style={styles.productImage}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={'contain'}
      />
      <View style={styles.infoContainer}>
        <View style={{ gap: 4 }}>
          <Text color={colors.primary} weight={TextVariant.SemiBold}>
            {title}
          </Text>
          <Text size={12} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <Text
          color={colors.active}
          style={styles.price}
          weight={TextVariant.Medium}
        >
          ${price}
        </Text>
      </View>
    </View>
  );
};

export default memo(ProductCard);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.greyish,
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    gap: 8,
  },
  productImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    gap: 5,
    justifyContent: 'space-between',
  },
  price: {
    alignSelf: 'flex-end',
  },
});
