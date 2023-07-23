const stock = new Set([
  {
    name: 'heihei',
    count: 1,
  },
])
export function checkStock(order: any) {
  const _stock = [...stock]
  const item = _stock.find((item) => {
    return item.name === order.name
  })

  if (!item) {
    return false
  }

  return item.count > 0
}

export function updateStock(order: any) {
  stock.add(order)
}
