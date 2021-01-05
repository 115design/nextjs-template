import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from '../store/createStore';

import 'sanitize.css';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import 'styles/common.scss';

import { motion, AnimatePresence } from 'framer-motion';

nprogress.configure({
	showSpinner: false,
	speed: 400,
	minimum: 0.25,
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	if (process.browser) {
		nprogress.start();
	}

	useEffect(() => {
		nprogress.done();
	});

	return (
		<Provider store={createStore}>
			<AnimatePresence exitBeforeEnter initial={false}>
				<motion.div
					className="transition_container"
					key={router.route}
					animate={{
						opacity: 1,
						x: 0,
						transition: {
							duration: 0.4,
							ease: [1.0, 0.5, 0.8, 1.0],
						},
					}}
					initial={{
						opacity: 0,
						x: 10,
					}}
					exit={{
						opacity: 0,
						x: -10,
						transition: {
							duration: 0.3,
							ease: [1.0, 0.5, 0.8, 1.0],
							// delay: 0.2,
						},
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Provider>
	);
}

export default MyApp;
