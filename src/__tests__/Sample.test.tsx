/// <reference types="jest" />

import React from 'react';
import Home from 'pages/index';
import { expect } from '@jest/globals';
import { cleanup, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore } from '../store/createStore';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		};
	},
}));

afterEach(cleanup);

it('Home ページコンポーネントが存在している', () => {
	expect(Home).toBeTruthy();
});

it('「Next.js!」のリンクが Next.js の公式サイトのトップページである', () => {
	render(
		<Provider store={createStore}>
			<Home />
		</Provider>
	);

	expect(screen.getByText('Next.js!').getAttribute('href')).toBe(
		'https://nextjs.org'
	);
});
