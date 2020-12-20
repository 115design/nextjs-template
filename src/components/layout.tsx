import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function Layout({ children }: Props): JSX.Element {
	return <div>{children}</div>;
}

export default Layout;
