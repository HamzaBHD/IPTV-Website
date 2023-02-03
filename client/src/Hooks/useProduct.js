import { useState, useEffect } from "react"


function useProduct(product) {
    const [productPurchased, setProductPurchesed] = useState({})


        useEffect(() => {
            if(product === '1-Month') {
                return setProductPurchesed({
                    productName: '1 Month Subscription',
                    productPrice: '10',
                })
            } else if (product === '3-Months') {
                return setProductPurchesed({
                    productName: '3 Months Subscription',
                    productPrice: '25',
                })
            } else if (product === '6-Months') {
                return setProductPurchesed({
                    productName: '6 Months Subscription',
                    productPrice: '40',
                })
            } else if (product === '1-Year') {
                return setProductPurchesed({
                    productName: '1 Year Subscription',
                    productPrice: '60',
                })
            } else {
                return
            }
        }, [product])

        return productPurchased
}

export default useProduct;