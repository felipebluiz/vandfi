export interface Item {
  image: string
  name: string
  tokenId: string
  creator: User
  owner: User
  collection: Collection
  likes: number
  liked: boolean
  onSale: boolean
  onAuction: boolean
  openOffers: boolean
  countdownDate?: string
  price: Price
}

export interface User {
  avatarUrl: string
  name: string
  address: string
  verified: boolean
}

export interface Collection {
  avatarUrl: string
  images: string[]
  name: string
  address: string
  verified: boolean
  creator: User
  floorPrice: Price
  tradingVolume: Price
}

export interface Price {
  currencySymbol: string
  amount: number
  convertedAmount: number
}
