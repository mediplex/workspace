import { State } from './State';

const data: State = {
  images: [
    {
      alt: 'Red',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=Red%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=Red%20400x500 400w,
        https://via.placeholder.com/800x1000.webp?text=Red%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=Red%201600x2000 1600w,
      `,
    },
    {
      alt: 'Green',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=Green%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=Green%20400x500 400w,
        https://via.placeholder.com/800x1000.webp?text=Green%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=Green%201600 1600w,
      `,
    },
    {
      alt: 'Brown',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=Brown%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=Brown%20400x500  400w,
        https://via.placeholder.com/800x1000.webp?text=Brown%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=Brown%201600 1600w,
      `,
    },
    {
      alt: 'Blue',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=Blue%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=Blue%20400x500  400w,
        https://via.placeholder.com/800x1000.webp?text=Blue%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=Blue%201600 1600w,
      `,
    },
  ],
  id: '',
  topBar: {
    content: 'Covid shit!',
    visible: true,
  },
  announcement: {
    title: 'FLASH SALE',
    content:
      '► 40% discount until stocks last ◄<br/>► Worldwide Free Shipping ◄',
    countdown: {
      initialDeadline: 57000 * 999,
    },
  },
  description: 'some description',
  inventory: {
    lowInventoryAlert: true,
    min: 13,
    max: 26,
  },
  buyButton: {
    content: 'Buy Now',
  },
  name: 'Lumination - Limitted Edition',
  category: '',
  pricing: {
    comparePrice: 138.95,
    discount: 'You save over 50%',
    price: 59.95,
    cost: 18.96,
  },
  ratingSummary: 4.5,
  liveVisitorCounter: {
    min: 55,
    max: 68,
  },
  reviewsSummary: 9367,

  shortDescription:
    'Write a brief description of why this thing is awesome in the facilities tow Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet , consectetur.',

  reviews: null,
  meta: {
    metaTags: [
      {
        name: 'keyword',
        content: 'toto',
      },
    ],
  },
};
export { data };
