import React from 'react';
import './Advantage.scss';
import { useTranslation } from 'react-i18next';

const Advantage = () => {
    const { t } = useTranslation();
    return (
        <section className="advantage">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t('Наши преимущества')}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='advantage__items'>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/experience.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('ОПЫТ РАБОТЫ')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Компания успешно существует 14 лет и накопила огромный опыт в строительстве, выполнив большое количество работ!')}</h4>
                        </div>
                    </div>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/calendar.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('СОБЛЮДЕНИЕ СРОКОВ')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Мы юридически оговариваем сроки строительства, и гарантируем сдачу объекта вовремя!')}</h4>
                        </div>
                    </div>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/quality.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('КАЧЕСТВО')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Нашим основным приоритетом является качественное, своевременное и безопасное выполнение строительно-монтажных работ!')}</h4>
                        </div>
                    </div>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/structure.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('ОТЛАЖЕННАЯ СТРУКТУРА')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Работа товарищества ведется по отлаженной структуре профессионалов, что является одним из основных факторов ведущих к стабильному наращиванию объемов работ!')}</h4>
                        </div>
                    </div>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/builder.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('КВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Каждый сотрудник выполняет свою работу на профессиональном уровне!')}</h4>
                        </div>
                    </div>
                    <div className='advantage__item'>
                        <div className='advantage__icon-background'>
                            <img className='advantage__icon' src='assets/images/svg/map.svg' alt=''/>
                        </div>
                        <div className='advantage__title-background'>
                            <h3 className='advantage__title'>{t('ОХВАТ ВСЕГО КАЗАХСТАНА')}</h3>
                        </div>
                        <div className='advantage__subtitle-background'>
                            <h4 className='advantage__subtitle'>{t('Мы работаем по всему Казахстану. Алматы, Атырау, Шымкент, Актобе и в других городах Казахстана!')}</h4>
                        </div>
                    </div>                 
                </div>
            </div>
		</section>
    );
}

export default Advantage;