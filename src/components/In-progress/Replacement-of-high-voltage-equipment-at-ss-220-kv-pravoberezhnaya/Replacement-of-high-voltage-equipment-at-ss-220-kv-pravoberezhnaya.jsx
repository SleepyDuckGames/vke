import React from 'react';
import { useTranslation } from 'react-i18next';

const ReplacementOfHighVoltageEquipmentAtSS220KvPravoberezhnaya = () => {
    const { t } = useTranslation();
    return (
        <section className='in-progress-information'>
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Замена высоковольтного оборудования на ПС 220кВ Правобережная")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='in-progress-information__row'>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/01.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/02.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/03.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/04.webp' alt='' />
                    </div>
                    <div className='in-progress-information__item'>
                        <img className='in-progress-information__item-img' src='/assets/images/in-progress/replacement-of-high-voltage-equipment-at-ss-220-kv-pravoberezhnaya/05.webp' alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReplacementOfHighVoltageEquipmentAtSS220KvPravoberezhnaya;