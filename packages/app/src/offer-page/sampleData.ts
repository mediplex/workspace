import { State } from './State'

const data: State = {
  announcement:
    'Due To The Popularity Of Our Free Awesome Thing, It May Sell Out As Of TODAY. We Have A Limited Supply The Thing IN STOCK An Ready To Ship Within The Next 24 Hours.',
  description: 'some description',
  header: {
    buyButton: {
      content: 'Buy Now',
    },
    countdown: {
      initialDeadline: 57000,
    },
    gallery: [],
    name: 'Awesome Product',
    pricing: {
      originalPrice: 138,
      discount: 'You save over 50%',
      discountedPrice: 59.99,
    },
    ratingSummary: 4.5,
    realTimevisitorRange: {
      min: 55,
      max: 68,
    },
    reviewsSummary: 9367,
    scarecity: 'Only 18 left in stock - order soon.',
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
  topBar: {
    visible: true,
    content: '🌐 Worldwide Free Shipping',
  },
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
