import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import colors from 'src/assets/colors';
import Text from 'src/components/Text';
import { TextVariant } from 'src/types/common';

type ButtonProps = PressableProps & {
  title?: string;
  variant?: 'filled' | 'outlined';
};

const Button = ({
  onPress,
  title,
  variant,
  disabled,
  children,
}: ButtonProps) => {
  const buttonStyle = ({ pressed }: { pressed: boolean }) => [
    styles.button,
    variant ? styles[variant] : {},
    pressed ? styles.pressed : {},
    disabled ? styles.disabled : {},
  ];

  return (
    <Pressable onPress={onPress} disabled={disabled} style={buttonStyle}>
      {title ? (
        <Text weight={TextVariant.SemiBold} color={colors.white}>
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  filled: {
    backgroundColor: colors.primary,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.active,
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    backgroundColor: colors.inactive,
  },
});
