import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './In-progress.scss';

const InProgress = () => {
    const { t } = useTranslation();
    return (
        <section className="in-progress">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("В процессе")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='in-progress__row'>
                    <Link className='in-progress__item' to='/in-progress/extension-of-substation-220-kulsary'>
                        <div className='in-progress__item-img'>
                            <img src='/assets/images/in-progress/extension-of-substation-220-kulsary/01.webp' alt='' />
                        </div>
                        <div className='in-progress__item-title'>{t("Расширение ПС 220 Кульсары")}</div>
                    </Link>
                    <Link className='in-progress__item' to='/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya'>
                        <div className='in-progress__item-img'>
                            <img src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/01.webp' alt='' />
                        </div>
                        <div className='in-progress__item-title'>{t("Замена высоковольтного оборудования на ПС 220кВ Правобережная")}</div>
                    </Link>
                </div>
            </div>
		</section>
    );
}

export default InProgress;