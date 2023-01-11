import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className='container pt-70'>
                <div className='footer__row'>
                    <Link to='/' className='footer__logo'>
                        <img className='footer__logo-img' src='/assets/images/logo/logo-on-black.webp' alt='' />
                    </Link>
                    <div className='footer__information'>
                        <h3 className='footer__information-title'>
                            {t("Адрес")}
                        </h3>
                        <h4 className='footer__information-subtitle'>
                            {t("Алматы, ул. Егизбаева, дом 13, кабинет 212, 214")}
                        </h4>
                    </div>
                    <div className='footer__information'>
                        <h3 className='footer__information-title'>
                            {t("Почта")}
                        </h3>
                        <h4 className='footer__information-subtitle'>
                            {t("kazvictory@mail.ru")}
                        </h4>
                    </div>
                    <div className='footer__information'>
                        <h3 className='footer__information-title'>
                            {t("Контакт")}
                        </h3>
                        <h4 className='footer__information-subtitle'>
                            {t("По всем вопросам обращайтесь по телефону:")}
                            <br/>+7 (727) 341-00-38
                        </h4>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className='container'>
                    <div className='footer__bottom-row'>
                        <h6 className='footer__bottom-title'>© 2022 vke.kz – {t("ТОО")} «VICTORY KAZ ENERGY»</h6>
                    </div>
                </div>
            </div>
		</footer>
    );
}

export default Footer;