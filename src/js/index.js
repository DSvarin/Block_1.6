import '../scss/style.scss';


/*let bckgrndSidebar = document.querySelector('.sidebar-background');

let closeOpenSidebar = function(openButton, closeButton,
                              sidebarContainer, sidebar,
                                transOpenClass, transCloseClass) {

  openButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    sidebar.classList.remove(transCloseClass);
    sidebar.classList.add(transOpenClass);
    bckgrndSidebar.style.display = 'block';
    sidebarContainer.style.zIndex = '100';
  });

  bckgrndSidebar.addEventListener('click', function () {
    sidebar.classList.add(transCloseClass);
    sidebar.classList.remove(transOpenClass);
    bckgrndSidebar.style.display = 'none';
  })

  closeButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    sidebar.classList.add(transCloseClass);
    sidebar.classList.remove(transOpenClass);
    bckgrndSidebar.style.display = 'none';
    sidebarContainer.style.zIndex = '0';
  });
}

// Menu sidebar
let openMenuButton = document.querySelector('.menu-button');
let closeMenuButton = document.querySelector('.menu-close');
let sidebarMenu = document.querySelector('.sidebar-menu__content');
let containerMenu = document.querySelector('.sidebar-menu');

closeOpenSidebar(openMenuButton, closeMenuButton, containerMenu, sidebarMenu, 'transform-menu--open' , 'transform-menu--close');

//Feedback sidebar
let openFeedbackButtonHeader = document.querySelector('.feedback-open');
let openFeedbackButtonSidebar = document.querySelector('.sidebar-menu').querySelector('.feedback-open');
let closeFeedbackButton = document.querySelector('.feedback-close');
let sidebarFeedback = document.querySelector('.sidebar-feedback__content');
let containerFeedback = document.querySelector('.sidebar-feedback');

closeOpenSidebar(openFeedbackButtonHeader, closeFeedbackButton, containerFeedback, sidebarFeedback, 'transform-feedback--open' , 'transform-feedback--close');
closeOpenSidebar(openFeedbackButtonSidebar, closeFeedbackButton, containerFeedback, sidebarFeedback, 'transform-feedback--open' , 'transform-feedback--close');

//Call sidebar
let opencallButtonHeader = document.querySelector('.call-open');
let opencallButtonSidebar = document.querySelector('.sidebar-menu').querySelector('.call-open');
let closecallButton = document.querySelector('.call-close');
let sidebarcall = document.querySelector('.sidebar-call__content');
let containercall = document.querySelector('.sidebar-call')

closeOpenSidebar(opencallButtonHeader, closecallButton, containercall, sidebarcall, 'transform-call--open' , 'transform-call--close');
closeOpenSidebar(opencallButtonSidebar, closecallButton, containercall, sidebarcall, 'transform-call--open' , 'transform-call--close');*/

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

    if (window.innerWidth >= 768 && window.innerWidth < 1372) {
      for (let i = numbVisibleSlidesM; i < slides.length; i++) {
          slides[i].style.display = 'flex';
      }
    } else if (window.innerWidth >= 1372) {
      for (let i = numbVisibleSlidesL; i < slides.length; i++) {
          slides[i].style.display = 'flex';
      }
    };
    more.style.display = 'none';
    less.style.display = 'block';
  });

  less.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (window.innerWidth >= 768 && window.innerWidth < 1372) {
      for (let i = numbVisibleSlidesM; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
    } else if (window.innerWidth >= 1372) {
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
