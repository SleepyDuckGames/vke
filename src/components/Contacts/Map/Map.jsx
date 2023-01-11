import React from 'react';
import { useTranslation } from 'react-i18next';
import './Map.scss';

const Map = () => {
    const { t } = useTranslation();
    return (
        <section className='map'>
            Map
		</section>
    );
}

export default Map;