import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import { TextVariant } from 'src/types/common';
import colors from 'src/assets/colors';

type EmptyStateProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const EmptyState = ({ icon, title, subtitle }: EmptyStateProps) => {
  return (
    <View style={styles.emptyStateContainer}>
      {icon}
      <Text color={colors.active} size={20} weight={TextVariant.Bold}>
        {title}
      </Text>
      <Text color={colors.inactive} size={16} weight={TextVariant.Medium}>
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  emptyStateContainer: {
    gap: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
});
