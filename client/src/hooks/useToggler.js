import { useState } from 'react'

function useToggler () {
    const [productDetail, setProductDetail] = useState(false)
    console.log(productDetail)

    const toggleDetail = () => {
        setProductDetail(prevState => !prevState)
    } 

    return { productDetail, toggleDetail }
}

export default useToggler;