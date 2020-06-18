import { ImgProps } from '../offer-page/components/shared';

type Image = ImgProps;

type Price = {
  value: number;
  compareAt: number;
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

type Variant = {
  id: string;
  image: Image;
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
  price: Price;
  liveVisitorCounter: LiveVisitorCounter;
  shortDescription: string;
  images: Image[];
  variants: Variant[];
  buyButton: BuyButton;
  description: string;
  reviews: Review[];
  meta: {
    metaTags: MetaTag[];
  };
}
