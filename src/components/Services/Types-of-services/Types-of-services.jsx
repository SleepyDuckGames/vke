import React from 'react';
import './Types-of-services.scss';
import { useTranslation } from 'react-i18next';

const TypesOfServices = () => {
    const { t } = useTranslation();
    return (
        <section className="types-of-services">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Виды услуг")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='types-of-services__row'>
                    <div className='types-of-services__item'>
                        <div className='types-of-services__information'>
                            <img className='types-of-services__icon' src='assets/images/svg/pillar.svg' alt=''/>
                            <ul className='types-of-services__list'>
                                <li>{t("Специальные строительные и монтажные работы по прокладке линейных сооружений, включающие капитальный ремонт и реконструкцию, в том числе:")}
                                    <ul className='ul-tab'>
                                        <li>{t("Магистральных линий электропередач с напряжением до 35 кВ и до 110 кВ и выше")}</li>
                                        <li>{t("Общереспубликанских и международных линий связи и телекоммуникаций")}</li>
                                        <li>{t("Стальных резервуаров (емкостей), включая работающих под давлением либо предназначенных для хранения взрывопожароопасных или иных опасных (вредных) жидких или газообразных веществ")}</li>
                                        <li>{t("Промысловых и магистральных сетей нефтепроводов, газопроводов, а также магистральных сетей нефтепродуктопроводов")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='types-of-services__img' style={{backgroundImage: `url(assets/images/services/01.webp)`}}>
                        </div>
                    </div>
                    <div className='types-of-services__item reverse'>
                        <div className='types-of-services__img' style={{backgroundImage: `url(assets/images/services/02.webp)`}}>
                        </div>                        
                        <div className='types-of-services__information'>
                            <img className='types-of-services__icon' src='assets/images/svg/wrench.svg' alt=''/>
                            <ul className='types-of-services__list'>
                                <li>{t("Монтаж технологического оборудования, пусконаладочные работы, связанные с:")}
                                    <ul className='ul-tab'>
                                        <li>{t("Объектами театрально-зрелищного, образовательного, спортивного назначения")}</li>
                                        <li>{t("Связью, противоаварийной защитой, системой контроля и сигнализации, блокировкой на транспорте, объектах электроэнергетики и водоснабжения, иных объектах жизнеобеспечения, а также приборами учета и контроля производственного назначения")}</li>
                                        <li>{t("Гидротехническими и мелиоративными сооружениями")}</li>
                                        <li>{t("Производством строительных материалов, изделий и конструкций")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='types-of-services__item'>
                        <div className='types-of-services__information'>
                            <img className='types-of-services__icon' src='assets/images/svg/priming.svg' alt=''/>
                            <ul className='types-of-services__list'>
                                <li>{t("Специальные работы в грунтах, в том числе:")}
                                    <ul className='ul-tab'>
                                        <li>{t("Подводно-технические работы и работы на морском шельфе")}</li>
                                        <li>{t("Буровые работы в грунте")}</li>
                                        <li>{t("Устройство оснований")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='types-of-services__img' style={{backgroundImage: `url(assets/images/services/03.webp)`}}>
                        </div>                        
                    </div>
                    <div className='types-of-services__item reverse'>
                        <div className='types-of-services__img' style={{backgroundImage: `url(assets/images/services/04.webp)`}}>
                        </div>                        
                        <div className='types-of-services__information'>
                            <img className='types-of-services__icon' src='assets/images/svg/building.svg' alt=''/>
                            <ul className='types-of-services__list right'>
                                <li>{t("Возведение несущих и (или) ограждающих конструкций зданий и сооружений (в том числе мостов, транспортных эстакад, тоннелей и путепроводов, иных искусственных строений), включающее капитальный ремонт и реконструкцию объектов, в том числе:")}
                                    <ul className='ul-tab'>
                                        <li>{t("Монтаж строительных конструкций подъемных сооружений (лифтов, эскалаторов, шахтных копров и подъемников, канатных дорог и других конструкций подъемных сооружений)")}</li>
                                        <li>{t("Горнопроходческие и тоннельные работы, устройство противофильтрационных завес")}</li>
                                        <li>{t("Кровельные работы")}</li>
                                        <li>{t("Устройство монолитных, а также монтаж сборных бетонных и железобетонных конструкций, кладка штучных элементов стен и перегородок и заполнение проемов")}</li>
                                        <li>{t("Дымовые трубы, силосные сооружения, градирни, надшахтные копры")}</li>
                                        <li>{t("Монтаж строительных конструкций башенного и мачтового типа, дымовых труб")}</li>
                                        <li>{t("Монтаж металлических конструкций")}</li>
                                        <li>{t("Гидротехнические и селезащитные сооружения, плотины, дамбы")}</li>
                                        <li>{t("Монтаж несущих конструкций мостов и мостовых переходов")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='types-of-services__item'>
                        <div className='types-of-services__information'>
                            <img className='types-of-services__icon' src='assets/images/svg/pipe.svg' alt=''/>
                            <ul className='types-of-services__list'>
                                <li>{t("Устройство инженерных сетей и систем, включающее капитальный ремонт и реконструкцию, в том числе:")}
                                    <ul className='ul-tab'>
                                        <li>{t("Сетей холодного и горячего водоснабжения, теплоснабжения, централизованной канализации бытовых, производственных и ливневых стоков, устройства внутренних систем водопровода, отопления и канализации")}</li>
                                        <li>{t("Сетей электроснабжения и устройства наружного электроосвещения, внутренних систем электроосвещения и электроотопления")}</li>
                                        <li>{t("Сетей электроснабжения железнодорожных путей сообщения, сетей электроснабжения и электроосвещения предприятий воздушного транспорта")}</li>
                                        <li>{t("Сетей газоснабжения высокого и среднего давления, бытового и производственного газоснабжения низкого давления, внутренних систем газоснабжения")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='types-of-services__img' style={{backgroundImage: `url(assets/images/services/05.webp)`}}>
                        </div>                        
                    </div>
                </div>
            </div>
		</section>
    );
}

export default TypesOfServices;