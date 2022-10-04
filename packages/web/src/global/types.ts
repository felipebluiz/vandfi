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
  name?: string
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

interface Rarity {
  position: number
  total: number
}

export interface Listing {
  tokenId: string
  collectionAddress: string
  id: string
  date: string
  expirationDate: string
  user: User
  quantity: number
  price: Price
}

export interface Bid {
  tokenId: string
  collectionAddress: string
  id: string
  date: string
  expirationDate: string
  user: User
  price: Price
  quantity?: number
  collectionFloorDifference: CollectionFloorDifference
}

interface CollectionFloorDifference {
  percent: number
  bellow: boolean
}

export interface History {
  tokenId: string
  collectionAddress: string
  id: string
  date: string
  expired?: boolean
  event: string
  sourceUser?: User
  targetUser?: User
  quantity?: number
  price?: Price
}
