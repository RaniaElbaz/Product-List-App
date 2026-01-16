import { memo, PropsWithChildren } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import colors from 'src/assets/colors';
import { TextVariant } from 'src/types/common';

export interface ITextProps extends PropsWithChildren<TextProps> {
  weight?: TextVariant;
  color?: string;
  size?: number;
  style?: TextStyle;
}

const Text = ({
  children,
  weight = TextVariant.Regular,
  color,
  size = 14,
  style,
  ...props
}: ITextProps) => {
  return (
    <RNText
      allowFontScaling={false}
      style={[
        {
          textAlign: 'left',
          color: color ?? colors.black,
          fontSize: size,
          fontWeight: weight,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default memo(Text);
