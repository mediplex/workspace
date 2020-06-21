import { State } from './State';

const offer1: State = {
  variants: [
    {
      id: 'offer-1',
      image: {
        alt: 'Red',
        lowSrc: ' https://via.placeholder.com/40x50.webp?text=1%2040x50',
        ratio: 5 / 4,
        srcSet: `
          https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
          https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
          https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
        `,
      },
    },
    {
      id: 'offer-2',
      image: {
        alt: 'Red',
        lowSrc: ' https://via.placeholder.com/40x50.webp?text=1%2040x50',
        ratio: 5 / 4,
        srcSet: `
          https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
          https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
          https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
        `,
      },
    },
    {
      id: 'offer-3',
      image: {
        alt: 'Red',
        lowSrc: ' https://via.placeholder.com/40x50.webp?text=1%2040x50',
        ratio: 5 / 4,
        srcSet: `
          https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
          https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
          https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
        `,
      },
    },
    {
      id: 'offer-4',
      image: {
        alt: 'Red',
        lowSrc: ' https://via.placeholder.com/40x50.webp?text=1%2040x50',
        ratio: 5 / 4,
        srcSet: `
          https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
          https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
          https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
        `,
      },
    },
  ],
  images: [
    {
      alt: 'Red',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=1%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
        https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
      `,
    },
    {
      alt: 'Green',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=2%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=2%20400x500 400w,
        https://via.placeholder.com/800x1000.webp?text=2%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=2%201600x2000 1600w,
      `,
    },
    {
      alt: 'Brown',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=3%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=3%20400x500  400w,
        https://via.placeholder.com/800x1000.webp?text=3%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=3%201600x2000 1600w,
      `,
    },
    {
      alt: 'Blue',
      lowSrc: ' https://via.placeholder.com/40x50.webp?text=4%2040x50',
      ratio: 5 / 4,
      srcSet: `
        https://via.placeholder.com/400x500.webp?text=4%20400x500  400w,
        https://via.placeholder.com/800x1000.webp?text=4%20800x1000 800w,
        https://via.placeholder.com/1600x2000.webp?text=4%201600x2000 1600w,
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
  name: 'Lumination - Offer 1',
  category: 'Smart Neck Massager',
  price: {
    compareAt: 138.95,
    discount: 'You save over 50%',
    value: 59.95,
    cost: 18.96,
  },
  ratingSummary: 4.5,
  liveVisitorCounter: {
    min: 55,
    max: 68,
  },
  reviewsSummary: 9367,

  shortDescription:
    '<p>This is what you will get by subscribing to our service:</p><span>▶&nbsp;Benefit 1</span><br/><span>▶&nbsp;Benefit 1</span><br/><span>▶&nbsp;Benefit 1</span><br/>',
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

const offer2: State = { ...offer1, name: 'Lumination - Offer 2' };
const offer3: State = { ...offer1, name: 'Lumination - Offer 2' };
const offer4: State = { ...offer1, name: 'Lumination - Offer 2' };

const data = {
  'offer-1': offer1,
  'offer-2': offer2,
  'offer-3': offer3,
  'offer-4': offer4,
};
export { data };
