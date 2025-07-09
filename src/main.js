import './assets/styles/main.scss'

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

// Инициализация Swiper с кастомными кнопками
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 1.2,
  loop: true,
  spaceBetween: 8,
  navigation: {
    nextEl: '.slider.-next',
    prevEl: '.slider.-prev',
  },
  breakpoints: {
    960: {
      slidesPerView: 3.2,
    },
    640: {
      slidesPerView: 2.2,
    },
    460: {
      slidesPerView: 1.85,
    },
  },
})
