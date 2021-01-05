import React from 'react';
import Head from 'next/head';

import Layout from 'components/layout';

import homeStyles from 'styles/Home.module.scss';

// ストア
import { useDispatch } from 'react-redux';

// ストア（カウンター）
import counterSlice from '../store/counter/slice';
import { useCounterState } from '../store/counter/selectors';
import { asyncIncrementCounter } from '../store/counter/asyncActions';

// ストア（ページ）
import { usePageState } from '../store/page/selectors';

export default function Home(): JSX.Element {
	const dispatch = useDispatch();

	// カウンター
	const counterState = useCounterState().counter;

	const onClickIncrement = () => {
		dispatch(counterSlice.actions.incrementCounter(1));
	};

	const onClickDecrement = () => {
		dispatch(counterSlice.actions.decrementCounter(1));
	};

	const onClickAsyncIncrement = async () => {
		await dispatch(asyncIncrementCounter(10));
	};

	// ページ
	const pageState = usePageState().page;

	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="HOME" />
			</Head>

			<main className={`${homeStyles['main']}`}>
				<h1 className={`${homeStyles['title']}`}>
					<a href="https://nextjs.org">Next.js!</a>
				</h1>

				<button type="button" onClick={onClickIncrement}>
					increment
				</button>
				<br />
				<button type="button" onClick={onClickDecrement}>
					decrement
				</button>
				<br />
				<button
					type="button"
					onClick={onClickAsyncIncrement}
					disabled={counterState.loading}
				>
					asyncIncrement
				</button>

				<p>count: {counterState.count}</p>
				{counterState.loading ? <p>processing</p> : ''}

				{counterState.error ? (
					<span>
						Error (Intentionally) <br />
						{counterState.errorMessage}
					</span>
				) : (
					''
				)}

				<p>current page: {pageState.page}</p>
				<p>previous page: {pageState.previousPage}</p>
			</main>
		</Layout>
	);
}
