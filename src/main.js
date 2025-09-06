import '../public/styles/normalize.css'
import '../public/styles/common.css'
import '../public/styles/type_a.css'
import 'swiper/swiper-bundle.css';

import '/src/leftNav.js';

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

/*----------------*/
const sectionHero = document.querySelector('.section-hero-wrap');
const sectionGroup = document.querySelector('.sections-wrap');
const btnDown = document.querySelector('.btn-down');



let hidden = false;

document.addEventListener('scroll', function(e) {
  if (window.scrollY >= 100 && !hidden) {
    sectionHero.style.top = '-100vh';
    hidden = true;
  } else if (window.scrollY < 100 && hidden) {
    sectionHero.style.top = '0';
    hidden = false;
  }
});

btnDown.addEventListener('click', function() {
  sectionHero.style.top = '-100vh';
  window.scrollTo({ top: sectionGroup.offsetTop, behavior: 'smooth' });
  hidden = true;
});
/*----------------*/