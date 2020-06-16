import { ImgProps } from '../offer-page/components/shared';

type Image = ImgProps;

type Pricing = {
  price: number;
  comparePrice: number;
  cost: number;
  discount: string;
};

type BuyButton = {
  content: string;
};

type Countdown = {
  initialDeadline: number;
};

type Review = {
  name: string;
  rating: number;
  comment: string;
  photos: {
    src: string;
    alt: string;
  };
};

type LiveVisitorCounter = {
  min: number;
  max: number;
};

type MetaTag = {
  property?: string;
  name: string;
  content: string;
};

type Inventory = {
  lowInventoryAlert: boolean;
  min: number;
  max: number;
};

type TopBar = {
  visible: boolean;
  content: string;
};
type Announcement = {
  title: string;
  content: string;
  countdown: Countdown;
};

export interface State {
  topBar?: TopBar;
  id: string;
  name: string;
  category: string;
  announcement?: Announcement;
  ratingSummary: number;
  reviewsSummary: number;
  inventory: Inventory;
  pricing: Pricing;
  liveVisitorCounter: LiveVisitorCounter;
  shortDescription: string;
  images: Image[];
  // selectedVariant: number;
  // variants: {
  //   name: string;
  //   options: string[];
  //   mainImageIndex?: number;
  // }[];
  buyButton: BuyButton;
  description: string;
  reviews: Review[];
  meta: {
    metaTags: MetaTag[];
  };
}
