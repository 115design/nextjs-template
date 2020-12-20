import React from 'react';

import Head from 'next/head';

import Header from 'components/header';
import Footer from 'components/footer';
import Layout from 'components/layout';

import homeStyles from 'styles/Home.module.scss';

export default function Home(): JSX.Element {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="HOME" />
			</Head>

			<Header></Header>

			<main className={homeStyles.main}>
				<h1 className={homeStyles.title}>
					<a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>

			<Footer></Footer>
		</Layout>
	);
}
