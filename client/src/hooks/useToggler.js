import { useState, useEffect } from 'react'

function useToggler () {
    const [productDetail, setProductDetail] = useState(false)
    console.log(productDetail)

    const toggleDetail = () => {
        setProductDetail(prevState => !prevState)
    } 


    function useOutsideAlerter(ref, fun) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                return fun
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, fun]);
}

    return { productDetail, toggleDetail, useOutsideAlerter }
}

export default useToggler;