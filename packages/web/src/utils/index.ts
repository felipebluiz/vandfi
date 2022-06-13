export const truncateAddress = (address: string, number = 8): string => {
  const firstSix = address.substring(0, number)
  const lastFour = address.substring(address.length - 4)

  return `${firstSix}...${lastFour}`
}

export const numberFormat = (number: number): string => {
  return new Intl.NumberFormat('en', { notation: 'compact' }).format(number)
}

export const currencyFormat = (amount: number): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export const countDownFormat = (countDown: number[]): string => {
  if (!countDown) return '00:00:00'

  return `${
    countDown[0] ? `${String(countDown[0]).padStart(2, '0')}:` : ''
  }${String(countDown[1]).padStart(2, '0')}:${String(countDown[2]).padStart(
    2,
    '0'
  )}:${String(countDown[3]).padStart(2, '0')}`
}
