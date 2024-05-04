import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'react-parallax';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow,Pagination,Navigation} from 'swiper/modules'

import gal1 from '../Imgs/nasa2.jpeg'
import gal2 from '../Imgs/nasa3.webp'
import gal3 from '../Imgs/nasa4.webp'
import gal4 from '../Imgs/nasa6.jpg'
import gal5 from '../Imgs/nasa7.webp'
import gal6 from '../Imgs/nasa8.jpg'

import nas5 from '../Imgs/nasa5.jpg'

function Gallery() {
    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
    
          // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
          offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
          delay: 100, // Add delay (in milliseconds) before the animation starts.
          duration: 800, // Set the duration (in milliseconds) of the animation.
          easing: 'ease', // Specify the easing function for the animation.
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
    
        // Clean up function
        return () => {
          AOS.refresh();
        };
    }, []);


  return (
    <>
       <div className="container-gal">
          <h1 className="heading2" data-aos="fade-down">Gallery</h1>
          <Swiper data-aos="fade-up" effect={'coverflow'} grabCursor={true} centeredSlides={true}
          loop={true} slidesPerView={'auto'}
          coverflowEffect={{rotate: 0,stretch: 0, depth: 100,modifier: 2.5 }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',clickable: true,}}
          modules={[EffectCoverflow, Pagination, Navigation]} className="swiper_container">
             <SwiperSlide>
                 <img src={gal1} alt="slide_image" />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={gal2} alt="slide_image" />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={gal3} alt="slide_image" />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={gal4} alt="slide_image" />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={gal5} alt="slide_image" />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={gal6} alt="slide_image" />
             </SwiperSlide>
             <div className="slider-controler">
                 <div className="swiper-button-prev slider-arrow">
                     <ion-icon name="arrow-back-outline"></ion-icon>
                 </div>
                 <div className="swiper-button-next slider-arrow">
                     <ion-icon name="arrow-forward-outline"></ion-icon>
                 </div>
                 <div className="swiper-pagination"></div>
              </div>
           </Swiper>
      </div>
      <br /> <br /> <br />
      <Parallax className='firstimg' bgImage={nas5} strength={800}>
        <div className='container'>
            <h2 className='img-txt2'>Planetary Photojournal coming soon...!!</h2>
        </div>
      </Parallax> 
    </>
  )
}

export default Gallery


