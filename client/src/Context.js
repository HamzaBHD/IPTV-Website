import { createContext, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [productId, setProductId] = useState('')
    console.log(productId)

    function getProductId(id) {
        setProductId(id)
        localStorage.setItem('productId', id)
        
    }

    return (
        <AppContext.Provider
            value={{ getProductId }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 