import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './projects.module.css';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          maxWidth: '85vh',
          height: 'fit-content'
        }}
      >
        {/* Usando caminho absoluto da pasta public */}
        <SwiperSlide><img className={styles.slide} src="/assets/homepage.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src="/assets/tvshow_detail.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src="/assets/cast_and_eps.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src="/assets/SSO_login.png" /></SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Carousel;
