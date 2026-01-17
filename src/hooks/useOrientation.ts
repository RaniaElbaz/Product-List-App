import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { Orientation } from 'src/types/common';

export const useOrientation = () => {
  const { width, height } = useWindowDimensions();

  return useMemo(
    () => ({
      orientation:
        width > height ? Orientation.Landscape : Orientation.Portrait,
    }),
    [width, height],
  );
};
