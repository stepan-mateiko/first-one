const slider = new Swiper(".swiper1", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },

  // autoplay: {
  //   delay: 5000,
  // },
});

const products = new Swiper(".swiper2", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },

  // autoplay: {
  //   delay: 5000,
  // },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const partners = new Swiper(".swiper3", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 35,
  loop: true,
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },

  // autoplay: {
  //   delay: 5000,
  // },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 9,
      spaceBetween: 35,
    },
  },
});
