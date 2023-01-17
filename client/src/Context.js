import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setMessage(data.message))
        
    }, [])

    return (
        <AppContext.Provider
            value={{ message }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 