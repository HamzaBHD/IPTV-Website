import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState([])
    const [productFound, setProductFound] = useState([])

    
    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => setMessage(data))
        
    }, [])
    
    function getProductId(id) {
        const product = message.filter(item => item._id === id)
        setProductFound([...product])
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