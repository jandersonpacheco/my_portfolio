import styles from './home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import homepage from '../public/assets/homepage_project.jpeg'
import tvshow_detail from '../public/assets/tvshow_detail.png'
import cast_and_eps from '../public/assets/cast_and_eps.png'
import SSO_login from '../public/assets/SSO_login.png'

const Carousel = ({}) => {

    return (
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projectImgs.map((projectImg))}
        <SwiperSlide><img className={styles.compentenseImg} src={homepage}></img></SwiperSlide>
        <SwiperSlide><img src={tvshow_detail} alt=' Foto não disponível'></img></SwiperSlide>
        <SwiperSlide><img src={cast_and_eps}></img></SwiperSlide>
        <SwiperSlide><img src={SSO_login}></img></SwiperSlide>
      </Swiper>
    )
}

export default Carousel;