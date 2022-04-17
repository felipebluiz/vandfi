export const truncateAddress = (address: string): string => {
  const firstSix = address.substring(0, 8)
  const lastFour = address.substring(address.length - 4)

  return `${firstSix}...${lastFour}`
}