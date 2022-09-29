const carousel = {
    item1: {
      name: 'div',
      attribut: {
        class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
        'data-carousel-item': '',
      },
      spanItem: {
        name: 'span',
        attribut: {
          class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
        },
        text: 'First Slide',
      },
      imgItem: {
        name: 'img',
        attribut: {
          class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
          src: './img/legoMulti.jpg',
          alt: 'lego multicolore',
        }
      }
    },
    item2: {
      name: 'div',
      attribut: {
        class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
        'data-carousel-item': '',
      },
      spanItem: {
        name: 'span',
        attribut: {
          class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
        },
        text: 'Second Slide',
      },
      imgItem: {
        name: 'img',
        attribut: {
          class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
          src: './img/legoYellow.jpg',
          alt: 'lego jaune',
        }
      }
    },
    item3: {
      name: 'div',
      attribut: {
        class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
        dataCarousel: '',
      },
      spanItem: {
        name: 'span',
        attribut: {
          class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
        },
        text: 'Third Slide',
      },
      imgItem: {
        name: 'img',
        attribut: {
          class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
          src: './img/lego.jpg',
          alt: 'lego',
        }
      }
    }
  }

export const CarouselComponent = carousel;