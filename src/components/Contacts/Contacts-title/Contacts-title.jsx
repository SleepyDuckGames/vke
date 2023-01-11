import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts-title.scss';

const ContactsTitle = () => {
    const { t } = useTranslation();
    return (
        <section className='contacts-title'>
            <div className='container'>
                <h3 className='contacts-title__title'>{t("Контакты")}</h3>
                <div className='contacts-title__row'>
                    <div className='contacts-title__item'>
                        <div className='contacts-title__icon'>
                            <img src='/assets/images/svg/location.svg' alt='' />
                        </div>
                        <h4 className='contacts-title__item-title'>{t("НАШ ГЛАВНЫЙ ОФИС")}</h4>
                        <h5 className='contacts-title__item-subtitle'>{t("Алматы, ул. Егизбаева, дом 13, офис 212")}</h5>
                    </div>
                    <div className='contacts-title__item'>
                        <div className='contacts-title__icon'>
                            <img src='/assets/images/svg/mail.svg' alt='' />
                        </div>
                        <h4 className='contacts-title__item-title'>{t("ЭЛ. ПОЧТА")}</h4>
                        <h5 className='contacts-title__item-subtitle'>kazvictory@mail.ru</h5>
                    </div>
                    <div className='contacts-title__item'>
                        <div className='contacts-title__icon'>
                            <img src='/assets/images/svg/call-stroke.svg' alt='' />
                        </div>
                        <h4 className='contacts-title__item-title'>{t("НОМЕР ТЕЛЕФОНА")}</h4>
                        <h5 className='contacts-title__item-subtitle'>+7 (727) 341-00-38</h5>
                    </div>
                </div>
            </div>
		</section>
    );
}

export default ContactsTitle;