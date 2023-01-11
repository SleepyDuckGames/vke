import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Zoom} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSTransition } from 'react-transition-group';

const Certificates = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(show === true){
                setShow(!show);
            }
        })
    }, [show]);
    
    return (
        <section className="certificates">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Сертификаты")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='licenses__row'>
                    <img onClick={() => {setNumber(0); setShow(!show)}} className='licenses__img' src='assets/images/documentation/certificate01.webp' alt=''/>
                    <img onClick={() => {setNumber(1); setShow(!show)}} className='licenses__img' src='assets/images/documentation/certificate01.webp' alt=''/>
                    <img onClick={() => {setNumber(2); setShow(!show)}} className='licenses__img' src='assets/images/documentation/certificate01.webp' alt=''/>
                </div>
            </div>
            <CSSTransition in={show} classNames='alert' timeout={300} unmountOnExit>
                <div className='large-scale'>
                    <div className='large-scale__close'>
                        <div onClick={() => setShow(!show)} className="cl-btn-7"></div>
                    </div>
                    <div className='large-scale__swiper'>
                        <Swiper
                            initialSlide={number}
                            modules={[Navigation, Pagination, Zoom]}
                            slidesPerView={1}
                            zoom={true}
                            navigation={true}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide><div className='swiper-zoom-container'><img src='assets/images/documentation/certificate01.webp' alt=''/></div></SwiperSlide>
                            <SwiperSlide><div className='swiper-zoom-container'><img src='assets/images/documentation/certificate02.webp' alt=''/></div></SwiperSlide>
                            <SwiperSlide><div className='swiper-zoom-container'><img src='assets/images/documentation/certificate03.webp' alt=''/></div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </CSSTransition>
		</section>
    );
}

export default Certificates;