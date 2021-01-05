import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import counterSlice, { initialState as counterState } from './counter/slice';
import pageSlice, { initialState as pageState } from './page/slice';

const rootReducer = combineReducers({
	counter: counterSlice.reducer,
	page: pageSlice.reducer,
});

const preloadedState = () => {
	return {
		counter: counterState,
		page: pageState,
	};
};

export type StoreState = ReturnType<typeof preloadedState>;
export type ReduxStore = Store<StoreState>;

const middlewareList = [...getDefaultMiddleware(), logger];

export const createStore = configureStore({
	reducer: rootReducer,
	middleware: middlewareList,
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState: preloadedState(),
});

export type RootState = ReturnType<typeof createStore.getState>;
