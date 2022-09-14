export interface Item {
  tokenId: string
  name: string
  description: string
  image: string
  creator: User
  owner: User
  collection: Collection
  rarity?: Rarity
  tokenStandard: string
  unlockableContent: boolean
  owners?: number
  editions?: number
  likes: number
  liked: boolean
  onSale: boolean
  onAuction: boolean
  openOffers: boolean
  countdownDate?: string
  price?: Price
  bid?: Price
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

export interface Rarity {
  position: number
  total: number
}
