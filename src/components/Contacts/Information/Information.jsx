import React from 'react';
import { useTranslation } from 'react-i18next';
import './Information.scss';

const Information = () => {
    const { t } = useTranslation();
    return (
        <section className='information'>
            <div className='container'>
                <p className='information__text'>{t("Директор")}: Балгабаев Мурат Сарсенбаевич<br/>
                тел: +7 (702) 884-44-48<br/>
                <br/>
                {t("Главный инженер")}: Галиев Ержан Кунгалиевич<br/>
                тел: +7 (778) 366-66-02<br/>
                <br/>
                {t("Менеджер по тендерам")}: Тарпанбаев Марат Шайзатович<br/>
                тел: +7 (777) 645-22-53<br/>
                <br/>
                {t("Производственно-технический отдел")}: Кокиланова Жадыра Талгатовна<br/>
                тел: +7 (747) 652-92-43<br/>
                <br/>
                {t("БИН")}:150940024207</p>
            </div>
		</section>
    );
}

export default Information;