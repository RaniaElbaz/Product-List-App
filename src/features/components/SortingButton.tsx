import React from 'react';
import AscendingSort from 'src/assets/icons/asc-sort.svg';
import CancelSort from 'src/assets/icons/cancel-sort.svg';
import DescendingSort from 'src/assets/icons/desc-sort.svg';
import Button from 'src/components/Button';
import { productsData, sortByPrice } from 'src/store/reducers/productSlice';
import { useAppDispatch, useAppSelector } from 'src/store/store';

const SortingButton = () => {
  const { sorting } = useAppSelector(productsData);

  const dispatch = useAppDispatch();

  const sortHandler = () => {
    if (!sorting) {
      dispatch(sortByPrice('asc'));
    } else if (sorting === 'asc') {
      dispatch(sortByPrice('desc'));
    } else {
      dispatch(sortByPrice(undefined));
    }
  };

  return (
    <Button onPress={sortHandler}>
      {!sorting ? (
        <AscendingSort />
      ) : sorting == 'asc' ? (
        <DescendingSort />
      ) : (
        <CancelSort />
      )}
    </Button>
  );
};

export default SortingButton;
