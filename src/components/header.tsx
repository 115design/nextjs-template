import React from 'react';

import headerStyles from 'styles/Header.module.scss';

export default function Header(): JSX.Element {
	return <header id="header" className={headerStyles.header}></header>;
}
