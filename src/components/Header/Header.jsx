import React from 'react';
import HeaderTop from './Header__top/Header__top';
import HeaderBottom from './Header__bottom/Header__bottom'
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <HeaderBottom/>
		</header>
    );
}

export default Header;