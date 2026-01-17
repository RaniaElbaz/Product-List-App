import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productSlice from './reducers/productSlice';

const rootReducer = combineReducers({
  products: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
