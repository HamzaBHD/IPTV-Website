import { useState, useEffect } from 'react'

function useProduct(product) {
  const [productPurchased, setProductPurchesed] = useState({})

  useEffect(() => {
    if (product === '1-Month') {
      return setProductPurchesed({
        productName: '1 Month Subscription',
        productPrice: '10',
        productOldPrice: '15',
      })
    } else if (product === '3-Months') {
      return setProductPurchesed({
        productName: '3 Months Subscription',
        productPrice: '25',
        productOldPrice: '30',
      })
    } else if (product === '6-Months') {
      return setProductPurchesed({
        productName: '6 Months Subscription',
        productPrice: '40',
        productOldPrice: '45',
      })
    } else if (product === '1-Year') {
      return setProductPurchesed({
        productName: '1 Year Subscription',
        productPrice: '60',
        productOldPrice: '70',
      })
    } else if (product === 'test') {
      return setProductPurchesed({
        productName: 'Test Before you buy',
        productPrice: 'Free',
        productOldPrice: 'Free',
      })
    } else {
      return setProductPurchesed({
        message: "It looks like you didn't pick your product yet.",
      })
    }
  }, [product])

  return productPurchased
}

export default useProduct
