import FastImage from '@d11/react-native-fast-image';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from 'src/assets/colors';
import Checkbox from 'src/components/Checkbox';
import Image from 'src/components/Image';
import Text from 'src/components/Text';
import { TextVariant } from 'src/types/common';
import { productType } from 'src/types/features/products';

type ProductCardProps = {
  product?: productType;
  style?: StyleProp<ViewStyle>;
  onSelectProduct: (id: number | undefined) => void;
};

const ProductCard = ({ product, style, onSelectProduct }: ProductCardProps) => {
  const { description, title, image, price, tags, id } = product || {};

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
      <Checkbox onPress={() => onSelectProduct(id)} style={styles.checkbox} />
      <View style={styles.infoContainer}>
        <View style={{ gap: 3 }}>
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
        <View style={styles.tagsContainer}>
          {tags?.map(tag => (
            <Text
              key={tag}
              style={styles.tag}
              size={12}
              weight={TextVariant.Medium}
              color={colors.primary}
            >
              {tag}
            </Text>
          ))}
        </View>
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
    flexDirection: 'row',
    height: 140,
    elevation: 2,
    backgroundColor: colors.white,
  },
  productImage: {
    width: 138,
    height: 138,
    borderRadius: 8,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
  },
  infoContainer: {
    flex: 1,
    columnGap: 3,
    padding: 8,
    justifyContent: 'space-between',
  },
  price: {
    alignSelf: 'flex-end',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  tag: {
    backgroundColor: colors.greyish,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    maxHeight: 20,
  },
  checkbox: {
    position: 'absolute',
    top: 8,
    start: 8,
  },
});
