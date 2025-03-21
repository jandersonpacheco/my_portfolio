import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import styles from './home.module.css'
import homepage from '../public/assets/homepage_project.jpeg'
import tvShowDetail from '../public/assets/tvshow_detail.png'
import castAndEps from '../public/assets/cast_and_eps.png'
import SSOLogin from '../public/assets/sso_login.png'

const Carousel = ({}) => {

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img className={styles.slide} src={homepage} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={tvShowDetail} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={castAndEps} /></SwiperSlide>
        <SwiperSlide><img className={styles.slide} src={SSOLogin} /></SwiperSlide>
      </Swiper>
    )
}

export default Carousel;

