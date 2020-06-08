import { State } from './State'

const data: State = {
  announcement: {
    title: 'FLASH SALE',
    content: '► 40% discount until stocks last<br/>► Worldwide Free Shipping',
    countdown: {
      initialDeadline: 57000 * 999,
    },
  },
  description: 'some description',
  productView: {
    stock: {
      min: 13,
      max: 26,
    },
    buyButton: {
      content: '▶ Buy Now',
    },
    gallery: [
      {
        src: 'https://picsum.photos/600',
        alt: '',
      },
      {
        src: 'https://picsum.photos/601',
        alt: '',
      },
      {
        src: 'https://picsum.photos/602',
        alt: '',
      },
      {
        src: 'https://picsum.photos/603',
        alt: '',
      },
    ],
    headline: 'Lumination - Limitted Edition',
    subheadline: 'Your Smart Neck Massager',
    pricing: {
      originalPrice: 138,
      discount: 'You save over 50%',
      discountedPrice: 59.99,
    },
    ratingSummary: 4.5,
    visitorRange: {
      min: 55,
      max: 68,
    },
    reviewsSummary: 9367,

    shortDescription:
      'Write a brief description of why this thing is awesome in the facilities tow Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet , consectetur.',
    variants: [
      {
        name: 'Color',
        options: [
          {
            name: 'Coral Blue',
            text: 'CB',
            color: '#99f',
            imageSrc:
              'https://cdn.shopify.com/s/files/1/0265/7891/1255/products/Rosa_1024x1024@2x.jpg',
          },
          {
            name: 'Coral Blue',
            text: 'CB',
            color: '#f20',
            imageSrc:
              'https://cdn.shopify.com/s/files/1/0265/7891/1255/products/Rosa_1024x1024@2x.jpg',
          },
        ],
      },
    ],
  },
  // topBar: {
  //   visible: true,
  //   content: '🌐 Worldwide Free Shipping',
  // },
  reviews: null,
  meta: {
    metaTags: [
      {
        name: 'keyword',
        content: 'toto',
      },
    ],
  },
}
export { data }
