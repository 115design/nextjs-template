import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// stateの型定義
export type PageState = {
	page: string;
	previousPage: string;
};

// 初期化
export const initialState: PageState = {
	page: '/',
	previousPage: '/',
};

// createSlice で reducer と action を同時に定義
const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		updatePage: (state, action: PayloadAction<string>) => ({
			...state,
			page: action.payload,
		}),
		updatePreviousPage: (state, action: PayloadAction<string>) => ({
			...state,
			previousPage: action.payload,
		}),
	},
});

export default pageSlice;
