import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './projects.module.css';
import homepage from '../assets/homepage.png';
import tvShowDetail from '../assets/tvshow_detail.png';
import castAndEps from '../assets/cast_and_eps.png';
import SSOLogin from '../assets/sso_login.png';

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
        <SwiperSlide><img className={styles.slide} src={homepage} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={tvShowDetail} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={castAndEps} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={SSOLogin} /></SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Carousel;
