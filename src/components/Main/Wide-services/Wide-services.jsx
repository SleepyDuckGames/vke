import React from 'react';
import { Link } from 'react-router-dom';
import './Wide-services.scss';
import { useTranslation } from 'react-i18next';

const WideServices = () => {
    const { t } = useTranslation();
    return (
        <section className="wide-services">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t('Мы предлагаем широкий спектр услуг')}</h3>
                </div>
            </div>
            <div className='wide-services__background' style={{backgroundImage: `url(assets/images/main/wide-services-background.webp)`}}>
                <div className='container'>
                    <div className='wide-services__row'>
                        <Link className='wide-services__service' to='/services'>
                            <img className='wide-services__icon' src='assets/images/svg/pillar.svg' alt='pillar' />
                            <div className='wide-services__text'>{t('Строительно-монтажные работы')}</div>
                        </Link>
                        <Link className='wide-services__service' to='/services'>
                            <img className='wide-services__icon' src='assets/images/svg/wrench.svg' alt='wrench' />
                            <div className='wide-services__text'>{t('Монтаж технологического оборудования, пусконоладочные работы')}</div>
                        </Link>
                        <Link className='wide-services__service' to='/services'>
                            <img className='wide-services__icon' src='assets/images/svg/priming.svg' alt='priming' />
                            <div className='wide-services__text'>{t('Специальные работы в грунтах')}</div>
                        </Link>
                        <Link className='wide-services__service' to='/services'>
                            <img className='wide-services__icon' src='assets/images/svg/building.svg' alt='building' />
                            <div className='wide-services__text'>{t('Возведение несущих и (или) ограждающих конструкци зданий и сооружений')}</div>
                        </Link>
                        <Link className='wide-services__service' to='/services'>
                            <img className='wide-services__icon' src='assets/images/svg/pipe.svg' alt='pipe' />
                            <div className='wide-services__text'>{t('Устройство инженерных сетей и систем')}</div>
                        </Link>
                    </div>
                    <Link className='wide-services__more' to='/services'>
                        {t('Подробнее')}
                    </Link>
                </div>
            </div>
		</section>
    );
}

export default WideServices;