import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

import commonStyles from 'styles/Common.module.scss';

function Layout({ children }: Props): JSX.Element {
	return <div className={commonStyles.container}>{children}</div>;
}

export default Layout;
