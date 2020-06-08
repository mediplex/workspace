export type Image = {
  src: string
  alt: string
}

export type Pricing = {
  originalPrice: number
  discountedPrice: number
  discount: string
}

export type BuyButton = {
  content: string
}

export type Countdown = {
  initialDeadline: number
}

export type Variant = {
  name: string
  options: {
    name: string
    text: string
    color: string
    imageSrc: string
  }[]
}

export type Review = {
  name: string
  rating: number
  comment: string
  photos: {
    src: string
    alt: string
  }
}

export type VisitorRange = {
  min: number
  max: number
}

export type MetaTag = {
  property?: string
  name: string
  content: string
}

export type Stock = {
  min: number
  max: number
}

export type ProductView = {
  gallery: Image[]
  headline: string
  subheadline: string
  ratingSummary: number
  reviewsSummary: number
  stock?: Stock
  visitorRange?: VisitorRange
  
  pricing: Pricing
  shortDescription: string
  variants: Variant[]
  buyButton: BuyButton
}

export type TopBar = {
  visible: boolean
  content: string
}
export type Announcement = {
  title: string
  content: string
  countdown: Countdown
}

export interface State {
  topBar?: TopBar
  announcement?: Announcement
  productView: ProductView
  description: string
  reviews: Review[]
  meta: {
    metaTags: MetaTag[]
  }
}
