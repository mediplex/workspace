type Image = {
  src: string
  alt: string
}

type Pricing = {
  originalPrice: number
  discountedPrice: number
  discount: string
}

type BuyButton = {
  content: string
}

type Countdown = {
  initialDeadline: number
}

type Variant = {
  name: string
  options: {
    name: string
    text: string
    color: string
    imageSrc: string
  }[]
}

type Review = {
  name: string
  rating: number
  comment: string
  photos: {
    src: string
    alt: string
  }
}

type VisitorRange = {
  min: number
  max: number
}

type MetaTag = {
  property?: string
  name: string
  content: string
}

type Stock = {
  min: number
  max: number
}

type ProductView = {
  gallery: Image[]
  name: string
  ratingSummary: number
  reviewsSummary: number
  stock: Stock
  realTimevisitorRange: VisitorRange
  countdown: Countdown
  pricing: Pricing
  shortDescription: string
  variants: Variant[]
  buyButton: BuyButton
}

type TopBar = {
  visible: boolean
  content: string
}

type Announcement = {
  title: string
  content: string
}

export interface State {
  topBar: TopBar
  announcement: Announcement
  productView: ProductView
  description: string
  reviews: Review[]
  meta: {
    metaTags: MetaTag[]
  }
}
