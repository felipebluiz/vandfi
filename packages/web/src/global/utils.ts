export const truncateAddress = (address: string, number = 8): string => {
  const firstSix = address.substring(0, number)
  const lastFour = address.substring(address.length - 4)

  return `${firstSix}...${lastFour}`
}

export const numberFormat = (number: number, notation = 'compact'): string => {
  return new Intl.NumberFormat('en', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notation
  }).format(number)
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

export const patterns = {
  email: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email'
  }
}
