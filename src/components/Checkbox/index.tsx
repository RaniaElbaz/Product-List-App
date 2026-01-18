import React, { Activity, useState } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'src/assets/colors';

type checkboxProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

const Checkbox = ({ style, onPress }: checkboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onSelectHandler = (e: GestureResponderEvent) => {
    setChecked(prev => !prev);
    if (onPress) onPress(e);
  };

  return (
    <Pressable
      hitSlop={20}
      onPress={onSelectHandler}
      style={[styles.checkbox, style]}
    >
      <Activity mode={checked ? 'visible' : 'hidden'}>
        <View style={styles.checkedStyle}></View>
      </Activity>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: colors.black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  checkedStyle: {
    backgroundColor: colors.delete,
    borderRadius: 3,
    width: 12,
    height: 12,
  },
});
