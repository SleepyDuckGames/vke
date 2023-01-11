import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header__top.scss';

const HeaderTop = () => {
    const { t } = useTranslation();

    return (
        <div className='header__top'>
            <div className='container'>
                <div className='header__top-columns'>
                    <div className='header__top-column'>
                        <img className='header__top-img' src='/assets/images/svg/home.svg' alt='home' />
                        <div className='header__top-text'>{t('Алматы, ул. Егизбаева, дом 13, офис 212')}</div>
                    </div>
                    <div className='header__top-column'>
                        <img className='header__top-img' src='/assets/images/svg/time.svg' alt='time' />
                        <div className='header__top-text'>{t('Пн-Пт: 09:00-18:00')}</div>
                    </div>
                    <div className='header__top-column'>
                        <img className='header__top-img' src='/assets/images/svg/mail.svg' alt='mail' />
                        <div className='header__top-text'>kazvictory@mail.ru</div>
                    </div>
                    <div className='header__top-column'>
                        <img className='header__top-img' src='/assets/images/svg/call.svg' alt='call' />
                        <div className='header__top-text'>+7 (727) 341-00-38</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;