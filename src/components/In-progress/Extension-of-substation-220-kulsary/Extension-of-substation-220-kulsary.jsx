import React from 'react';
import { useTranslation } from 'react-i18next';
import './Extension-of-substation-220-kulsary.scss';

const ExtensionOfSubstationKulsary = () => {
    const { t } = useTranslation();
    return (
        <section className='in-progress-information'>
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Расширение ПС 220 Кульсары")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='in-progress-information__row'>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/01.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/02.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/03.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/04.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/05.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/extension-of-substation-220-kulsary/06.webp' alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExtensionOfSubstationKulsary;