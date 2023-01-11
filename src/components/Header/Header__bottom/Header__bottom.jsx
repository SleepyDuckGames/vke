import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../../hooks/use-localstorage';
import i18n from '../../../i18n';
import './Header__bottom.scss';

let menuBodyRef = React.createRef();
let menuIconRef = React.createRef();
let dropdownRef = React.createRef();

const handleClick = () => {
    (menuIconRef.current.classList.contains("active") === true) ? menuIconRef.current.classList.remove("active") : menuIconRef.current.classList.add("active");
    (menuBodyRef.current.classList.contains("active") === true) ? menuBodyRef.current.classList.remove("active") : menuBodyRef.current.classList.add("active");
}

const handleClickRemove = () => {
    if(menuIconRef.current.classList.contains("active") === true && menuBodyRef.current.classList.contains("active") === true){
        menuIconRef.current.classList.remove("active");
        menuBodyRef.current.classList.remove("active");
    }
}

const HeaderBottom = () => {
    useEffect(() => {
        const buttonMenu = Array.from(
            document.getElementsByClassName('menu__button')
        );
        buttonMenu.forEach(element => {
            element.addEventListener('click', () =>{
                if(menuIconRef){
                    handleClickRemove();
                }
                
            })
        });  
    }, []);



    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    const languageChangeRU = () => {
        if (language === 'kz') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        }
    };

    const languageChangeKZ = () => {
        if (language === 'ru') {
            i18n.changeLanguage('kz');
            setLanguage('kz');
        }
    };

    const buttonClick = () => {
        (dropdownRef.current.classList.contains("active") === true) ? dropdownRef.current.classList.remove("active") : dropdownRef.current.classList.add("active");
    }

    return (
        <div className='header__bottom'> 
            <div className='container'>
                <div className='header__bottom-column'>
                    <Link className='header__bottom-column-logo menu__button' to='/'>
                        <img className='header__bottom-column-logo-img' src='/assets/images/logo/logo.webp' alt='logo' />
                    </Link>
                    <div className='header__bottom-menu menu'>
                        <button className='menu__icon' onClick={handleClick} ref={menuIconRef}>
                            <span></span>
                        </button>
                        <div className='menu__body' ref={menuBodyRef}>
                            <ul className='menu__left container'>
                                <li>
                                    <Link className='menu__left-column text menu__button' to='/about'>{t('О компании')}</Link>
                                </li>
                                <li>
                                    <Link className='menu__left-column text menu__button' to='/services'>{t('Услуги')}</Link>
                                </li>
                                <li className='dropdown' onClick={buttonClick} ref={dropdownRef}>
                                    <button href='/' className='menu__left-column text'>
                                        {t('Проекты')}
                                        <div className='menu__arrow'></div>
                                    </button>
                                    <ul className='dropdown__content text'>
                                        <li>
                                            <Link className='dropdown__content-menu menu__left-column menu__button' to='/in-progress'>  {t('Действующие')}</Link>
                                        </li>                                
                                        <li>
                                            <Link className='dropdown__content-menu menu__left-column menu__button' to='/complited'>  {t('Реализованные')}</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/documentation' className='menu__left-column text menu__button'>{t('Документация')}</Link>
                                </li>
                                <li>
                                    <Link to='/contacts' className='menu__left-column text menu__button'>{t('Контакты')}</Link>                            
                                </li>
                            </ul>
                            <ul className='menu__right'>
                                <li className='menu__right-column dropdown'>
                                    <button className='language'>
                                        <div className='language__background'></div>
                                        <div className='language__text'>{t('RU')}</div>
                                    </button>
                                    <ul className='dropdown__content'>
                                        <button className='dropdown__content-menu language menu__button' onClick={languageChangeKZ}>
                                            <div className='language__background'></div>
                                            <div className='language__text'>KZ</div>
                                        </button>
                                        <button className='dropdown__content-menu language menu__button' onClick={languageChangeRU}>
                                            <div className='language__background'></div>
                                            <div className='language__text'>RU</div>
                                        </button>
                                    </ul>
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;