import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState([])
    const [productId, setProductId] = useState('')
    const [productFound, setProductFound] = useState([])
    console.log(productId)

    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => setMessage(data))
    }, [])

    useEffect(() => {

        fetch(`/products/${productId || localStorage.getItem('productId') || 'firstLoad' }`)
        .then(res => res.json())
        .then(data => setProductFound(data))
        
    }, [productId])
    
    function getProductId(id) {
        setProductId(id)
        localStorage.setItem('productId', id)
    }

    function clearCard() {
        setProductId('')
        localStorage.clear('productId')
        console.log('I was clicked')
    }

    return (
        <AppContext.Provider
            value={{ message, getProductId, productFound, clearCard }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 