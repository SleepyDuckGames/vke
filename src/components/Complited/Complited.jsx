import React from 'react';
import { useTranslation } from 'react-i18next';
import './Complited.scss';

const Complited = () => {
    const { t } = useTranslation();
    return (
        <section className="complited">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Объекты возведенные за период 2008-2022 г.")}</h3>
                </div>
            </div>
            <div className='container'>
                <table className='complited__table' bgcolor='D9D9D9'>
                    <thead>
                        <tr>
                            <th>{t("Местонахождение объекта")}</th>
                            <th>{t("Заказчик")}</th>
                            <th>{t("Виды выполняемых работ")}</th>
                            <th>{t("Период выполнения, год")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Агадырь</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация и расширение AO «KEGOC» Подстанция ПС – 500 кВ</td>
                            <td>2008 – 2009 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Актюбинск</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация AO «KEGOC» ПС-220/110 кВ</td>
                            <td>2009 – 2010 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Кентау</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация AO «KEGOC» ПС -220/110 /10 кВ</td>
                            <td>2010 – 2011 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Шелек</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация AO «KEGOC» ПС -220/110/10 кВ ПС</td>
                            <td>2010 – 2012 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Мойнак</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Строительство и выдача энергии Мойнакской ГЭС ОРУ -220кВ</td>
                            <td>2012 – 2014 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Каскелен</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Строительство ПС 220/110/10 кВ АО «АЖК»</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Алматы</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация AO «KEGOC» ПС -500 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Жамбыл</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация 2-этап AO «KEGOC» 500 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Шымкент</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация 2-этап AO «KEGOC» 500 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Састобе</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация 2-этап AO «KEGOC» 220 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Опорная</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация 2-этап AO «KEGOC» 220 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Жанакорган</td>
                            <td>ТОО "Kerney Limited"</td>
                            <td>Модернизация 2-этап AO «KEGOC» 220 кВ</td>
                            <td>2015 – 2017 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Амангельды</td>
                            <td>ТОО «КазИНЖ»</td>
                            <td>«Строительство пропановой холодильной установки на месторождения Амангельды»</td>
                            <td>2018 – 2020 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Алматы</td>
                            <td>ТОО «КазИНЖ»</td>
                            <td>«Реконструкция ОРУ 500 кВ с заменой разъединителей, ТТ, ТН, КС, ВЧЗ на ПС 500 кВ «Алматы»</td>
                            <td>2018 – 2019 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Жанакорган</td>
                            <td>ТОО «КазИНЖ»</td>
                            <td>Промышленная отработка месторождения урана "Харасан-1". Расширение (Корректировка). I и II пусковые комплексы»</td>
                            <td>2018 – 2019 г.</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Сарбай</td>
                            <td>ТОО «КазИНЖ»</td>
                            <td>«Реконструкция собственных нужд с заменой ТСН №№1,2,3 на ПС 220кВ  AO «KEGOC»</td>
                            <td>2018 – 2019 г.</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Павлодар</td>
                            <td>ТОО «ПНХЗ»</td>
                            <td>Ремонт ограждения периметра территории</td>
                            <td>2021 г.</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
		</section>
    );
}

export default Complited;