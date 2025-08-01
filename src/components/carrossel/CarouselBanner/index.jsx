
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Carousel.module.css';
import { bannerGamesData } from '../../../data/bannerGamesData';

export default function BannerCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {bannerGamesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideGrid}>
              <div className={styles.leftColumn}>
                <div className={styles.imageWrapper}>
                  {/* Testando url dinâmica para construção do viewGame */}
                  <Link to={`/game/${slide.smallImage1.id}`} className={styles.imageLink}>
                    <img src={slide.smallImage1.url} alt={slide.smallImage1.title} />
                    <div className={styles.overlay}>
                      <span className={styles.discount}>{slide.smallImage1.discount}</span>
                      <span className={styles.price}>{slide.smallImage1.price}</span>
                    </div>
                  </Link>
                </div>
                <div className={styles.imageWrapper}>
                  <Link to={`/game/${slide.smallImage2.id}`} className={styles.imageLink}>
                    <img src={slide.smallImage2.url} alt={slide.smallImage2.title} />
                    <div className={styles.overlay}>
                      <span className={styles.discount}>{slide.smallImage2.discount}</span>
                      <span className={styles.price}>{slide.smallImage2.price}</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.imageWrapper}>
                  <Link to={`/game/${slide.mainImage.id}`} className={styles.imageLink}>
                    <img src={slide.mainImage.url} alt={slide.mainImage.title} />
                    <div className={styles.overlay}>
                      <span className={styles.discount}>{slide.mainImage.discount}</span>
                      <span className={styles.price}>{slide.mainImage.price}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}