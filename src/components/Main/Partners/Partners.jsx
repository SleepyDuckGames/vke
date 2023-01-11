import React from 'react';
import './Partners.scss';
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Partners = () => {
    const { t } = useTranslation();
    return (       
        <section className="partners">
            <div className='section__title'>
                <div className='container'>
                    <h3 className='section__title-text'>{t("Партнеры")}</h3>
                </div>
            </div>
            <div className='container'>
                <div className='partners__swiper'>
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1249: {
                            slidesPerView: 4,
                        },
                      }}
                    >
                        <SwiperSlide><img src='assets/images/partners/01.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/02.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/03.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/04.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/05.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/07.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/08.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/09.webp' alt=''/></SwiperSlide>
                        <SwiperSlide><img src='assets/images/partners/10.webp' alt=''/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
		</section>
    );
}

export default Partners;