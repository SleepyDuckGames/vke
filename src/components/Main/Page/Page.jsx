import React from 'react';
import './Page.scss';
import { useTranslation } from 'react-i18next';

const Page = () => {
    const {t} = useTranslation();
    return (
        <section className="page" style={{backgroundImage: `url(assets/images/main/page-background.webp)`}}>
            <div className='container'>
                <h1 className='page__title'>VICTORY KAZ ENERGY - {t('СТРОИТЕЛЬНО-МОНТАЖНАЯ КОМПАНИЯ')}</h1>
                <h2 className='page__subtitle'>{t('Ваши надежные партнеры с 2008 года')}</h2>
            </div>
		</section>
    );
}

export default Page;