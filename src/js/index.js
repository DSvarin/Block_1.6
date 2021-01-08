import '../scss/style.scss';

//Button-modal

let modalButtons = document.querySelectorAll('.modal-open');
let overlay = document.querySelector('.overlay');
let closeButtons = document.querySelectorAll('.modal-close');
let body = document.querySelector('body');

modalButtons.forEach(function(item){

  item.addEventListener('click', function(evt) {
    evt.preventDefault();

    let modalId = this.getAttribute('data-modal');
    let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    let modalMenu = document.querySelector('.modal-menu');

    body.style.overflowY = 'hidden';

    if (modalId === 'call' || modalId === 'feedback' && modalMenu.classList.contains('modal--active')) {
      modalMenu.classList.remove('modal--active');
    }

    modalElem.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });

});


closeButtons.forEach(function(item){

  item.addEventListener('click', function(evt) {
    evt.preventDefault();

    body.style.overflowY = 'visible';

    let parentModal = this.closest('.modal');

    parentModal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
  });

});

overlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  let openModal = document.querySelectorAll('.modal--active')

  body.style.overflowY = 'visible';
  if(openModal.length > 0){
  openModal.forEach(function(item){
    item.classList.remove('modal--active');
  })};
  overlay.classList.remove('overlay--active');
});

//Sliders

import Swiper from 'swiper/bundle';

if (window.innerWidth < 768) {
  new Swiper('.brands-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 26,
    pagination: {
        el: '.swiper-pagination',
    }
  })

  new Swiper('.devices-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 26,
    pagination: {
        el: '.swiper-pagination',
    }
  })

  new Swiper('.prices-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 26,
    pagination: {
        el: '.swiper-pagination',
    }
  })
}

//Button more-less slides

let showMoreLess = function(slideClass, moreBtnClass, lessBtnClass, numbVisibleSlidesM, numbVisibleSlidesL) {

  let slides = document.querySelectorAll(slideClass);
  let more = document.querySelector(moreBtnClass);
  let less = document.querySelector(lessBtnClass);

  more.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      for (let i = numbVisibleSlidesM; i < slides.length; i++) {
          slides[i].style.display = 'flex';
      }
    } else if (window.innerWidth >= 1120) {
      for (let i = numbVisibleSlidesL; i < slides.length; i++) {
          slides[i].style.display = 'flex';
      }
    };
    more.style.display = 'none';
    less.style.display = 'block';
  });

  less.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      for (let i = numbVisibleSlidesM; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
    } else if (window.innerWidth >= 1120) {
      for (let i = numbVisibleSlidesL; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
    };
    more.style.display = 'block';
    less.style.display = 'none';
  });
}

showMoreLess('.brand-slide', '.brands-button__more', '.brands-button__less', 6, 8);
showMoreLess('.device-slide', '.devices-button__more', '.devices-button__less', 3, 4);
