
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Carousel.module.css';
import { bannerGamesData } from '../../../data/bannerGamesData';
import useWindowSize from '../../hooks/useWindowSize'; 

export default function BannerCarousel() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const mobileSlides = bannerGamesData.flatMap(slide => [
    slide.smallImage1,
    slide.smallImage2,
    slide.mainImage,
  ]);
  
  // Escolha quais dados usar com base no tamanho da tela
  const slidesToRender = isMobile ? mobileSlides : bannerGamesData;

  const swiperSettings = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: isMobile ? 20 : 50,
    slidesPerView: 1,
    navigation: !isMobile, // Oculta as setas no mobile
    pagination: { clickable: true },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper {...swiperSettings} key={isMobile ? 'mobile' : 'desktop'}>
        {slidesToRender.map((slideData, index) => (
          <SwiperSlide key={isMobile ? slideData.id : slideData.id + index}>
            {isMobile ? (
              // --- SLIDE PARA MOBILE ---
              <div className={styles.mobileSlide}>
                <Link to={`/game/${slideData.id}`} className={styles.imageLink}>
                  <img src={slideData.url} alt={slideData.title} />
                  <div className={styles.overlay}>
                    <span className={styles.discount}>{slideData.discount}</span>
                    <span className={styles.price}>{slideData.price}</span>
                  </div>
                </Link>
              </div>
            ) : (
              // --- SLIDE PARA DESKTOP ---
              <div className={styles.slideGrid}>
                <div className={styles.leftColumn}>
                  <div className={styles.imageWrapper}>
                    <Link to={`/game/${slideData.smallImage1.id}`} className={styles.imageLink}>
                      <img src={slideData.smallImage1.url} alt={slideData.smallImage1.title} />
                      <div className={styles.overlay}>
                        <span className={styles.discount}>{slideData.smallImage1.discount}</span>
                        <span className={styles.price}>{slideData.smallImage1.price}</span>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.imageWrapper}>
                    <Link to={`/game/${slideData.smallImage2.id}`} className={styles.imageLink}>
                      <img src={slideData.smallImage2.url} alt={slideData.smallImage2.title} />
                      <div className={styles.overlay}>
                        <span className={styles.discount}>{slideData.smallImage2.discount}</span>
                        <span className={styles.price}>{slideData.smallImage2.price}</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.rightColumn}>
                  <div className={styles.imageWrapper}>
                    <Link to={`/game/${slideData.mainImage.id}`} className={styles.imageLink}>
                      <img src={slideData.mainImage.url} alt={slideData.mainImage.title} />
                      <div className={styles.overlay}>
                        <span className={styles.discount}>{slideData.mainImage.discount}</span>
                        <span className={styles.price}>{slideData.mainImage.price}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
