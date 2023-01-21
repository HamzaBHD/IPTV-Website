import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState([])
    const [productId, setProductId] = useState('')
    const [productFound, setProductFound] = useState([])

    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => setMessage(data))
    }, [])

    useEffect(() => {
        fetch(`/products/${productId || localStorage.getItem('productId')}`)
        .then(res => res.json())
        .then(data => setProductFound(data))
        
    }, [productId])
    
    function getProductId(id) {
        setProductId(id)
        localStorage.setItem('productId', id)
    }

    return (
        <AppContext.Provider
            value={{ message, getProductId, productFound }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 