import '../public/styles/normalize.css'
import '../public/styles/common.css'
import '../public/styles/type_a.css'
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

const swiper = new Swiper('.hero-swiper-container', {
modules: [Autoplay, EffectFade],
  loop: true,
  effect: 'fade', 
  fadeEffect: { crossFade: true },
  speed: 2500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  slidesPerView: 1,
});