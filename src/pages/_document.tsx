import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface MyDocumentInterface {
	url: string;
	title: string;
	description: string;
}

class MyDocument extends Document implements MyDocumentInterface {
	url = process.env.NEXT_PUBLIC_SITE_URL;
	title = 'Demo Next.js';
	description = 'Demo of Next.js';

	render(): JSX.Element {
		return (
			<Html lang="ja-JP">
				<Head>
					<meta name="theme-color" content="#333" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={this.title} />
					<meta property="og:url" content={this.url} />
					<meta property="og:description" content={this.description} />
					<meta property="og:site_name" content={this.title} />
					<meta property="og:image" content={`${this.url}/ogp.png`} />
					<meta name="format-detection" content="telephone=no" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={this.title} />
					<meta name="twitter:description" content={this.description} />
					<meta name="twitter:image" content={`${this.url}/ogp.png`} />
					<link rel="icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
