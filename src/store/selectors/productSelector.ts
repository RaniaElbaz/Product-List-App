import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { lowerCaseHandler } from 'src/utils/common';

const selectedProducts = (state: RootState) => state.products;

export const filteredProducts = createSelector(
  [selectedProducts],
  ({ data, searchKey, sorting, deletedIds }) => {
    let products = data;

    // DELETE
    if (deletedIds.length) {
      products = products.filter(product =>
        !deletedIds.some(id => id == product.id),
      );
    }

    // SEARCH
    if (searchKey && searchKey.length >= 3) {
      products = products.filter(product => {
        return (
          lowerCaseHandler(product.title).includes(searchKey) ||
          product.tags.some(tag => lowerCaseHandler(tag).includes(searchKey))
        );
      });
    }

    // SORT
    if (sorting) {
      if (sorting === 'asc') {
        // ascending sort
        products = [...products].sort(
          (current, next) => current.price - next.price,
        );
      } else if (sorting === 'desc') {
        // descending sort
        products = [...products].sort(
          (current, next) => next.price - current.price,
        );
      }
    }

    return products;
  },
);
