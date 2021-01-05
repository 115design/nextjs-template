import React, { ReactNode, useEffect } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

interface Props {
	children: ReactNode;
}

import { useRouter } from 'next/router';

// ストア
import { useDispatch } from 'react-redux';

// ストア（ページ）
import pageSlice from '../store/page/slice';

function Layout({ children }: Props): JSX.Element {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		// mount
		dispatch(pageSlice.actions.updatePage(router.route));

		// unmount
		return function cleanup() {
			dispatch(pageSlice.actions.updatePreviousPage(router.route));
		};
	}, []);

	return (
		<div className="layout_container">
			<Header></Header>
			<div className="container">{children}</div>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
