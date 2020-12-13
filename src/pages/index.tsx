import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head';
import Layout from 'components/layout';

import homeStyles from 'styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="HOME" />
			</Head>

			<main className={homeStyles.main}>
				<h1 className={homeStyles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={homeStyles.description}>
					Get started by editing{' '}
					<code className={homeStyles.code}>pages/index.js</code>
				</p>

				<div className={homeStyles.grid}>
					<a href="https://nextjs.org/docs" className={homeStyles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={homeStyles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={homeStyles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={homeStyles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className={homeStyles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img
						src="/vercel.svg"
						alt="Vercel Logo"
						className={homeStyles.logo}
					/>
				</a>
			</footer>
		</Layout>
	);
};

export default Home;
