import { State } from './State';

// {
//   alt: "Red",
//   lowSrc: " https://via.placeholder.com/40x50.webp?text=1%2040x50",
//   ratio: 5 / 4,
//   srcSet: `
//     https://via.placeholder.com/400x500.webp?text=1%20400x500 400w,
//     https://via.placeholder.com/800x1000.webp?text=1%20800x1000 800w,
//     https://via.placeholder.com/1600x2000.webp?text=1%201600x2000x2000 1600w,
//   `,
// },

const offer1: State = {
  variants: [
    {
      id: 'offer-1',
      image: {
        alt: 'Blue',
        lowSrc: '/images/blue.webp',
        ratio: 1 / 1,
        srcSet: `
          /images/blue.webp 640w,
        `,
      },
    },
    {
      id: 'offer-2',
      image: {
        alt: 'Pink',
        lowSrc: '/images/pink.webp',
        ratio: 1 / 1,
        srcSet: `
          /images/pink.webp 640w,
        `,
      },
    },
    {
      id: 'offer-3',
      image: {
        alt: 'White',
        lowSrc: '/images/white.webp',
        ratio: 1 / 1,
        srcSet: `
          /images/white.webp 640w,
        `,
      },
    },
  ],
  images: [
    {
      alt: 'White',
      lowSrc: '/images/white.webp',
      ratio: 1 / 1,
      srcSet: `
        /images/white.webp 640w,
      `,
    },
    {
      alt: 'Side Shot',
      lowSrc: '/images/side-shot.webp',
      ratio: 1 / 1,
      srcSet: `
        /images/side-shot.webp 640w,
      `,
    },
    {
      alt: 'Outer Shot',
      lowSrc: '/images/outer-shot.webp',
      ratio: 1 / 1,
      srcSet: `
        /images/outer-shot.webp 640w,
      `,
    },
    {
      alt: 'Soft pad',
      lowSrc: '/images/soft-pad.webp',
      ratio: 1 / 1,
      srcSet: `
        /images/soft-pad.webp 640w,
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
    content: '► 40% discount until stocks last ◄<br/>► Worldwide Free Shipping ◄',
    countdown: {
      initialDeadline: 57000 * 999,
    },
  },
  description: `<div class='MuiTypography-body1'><strong>Lorem ipsum</strong> dolor sit amet consectetur, adipisicing elit. Laboriosam quia, accusamus provident voluptatem
  corporis quibusdam sit! Illum placeat, reiciendis quisquam quas fuga quod libero vitae alias assumenda
  cupiditate, beatae necessitatibus. Eum doloribus tempore inventore rerum, enim error in, iure ab temporibus,
  sapiente vitae repellendus omnis quas! Molestias quia eius minus exercitationem pariatur facilis, vero porro!
  Delectus dolores tempora velit repellendus. Minus quasi aliquid commodi, necessitatibus veritatis eius
  laudantium doloremque fugiat dolore ex animi veniam expedita eveniet architecto dolores nemo asperiores
  libero. Nostrum, optio sint sequi expedita inventore reiciendis. Sequi, maiores?</div>`,
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
  reviews: [],
  meta: {
    metaTags: [
      {
        name: 'keyword',
        content: 'toto',
      },
    ],
  },
};

const offer2: State = { ...offer1, name: 'Lumination' };
const offer3: State = { ...offer1, name: 'Lumination' };
const offer4: State = { ...offer1, name: 'Lumination' };

const data = {
  'offer-1': offer1,
  'offer-2': offer2,
  'offer-3': offer3,
  'offer-4': offer4,
};

const appMessages = {
  en: {
    second: 'second',
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
  },
};

export { data, appMessages };
