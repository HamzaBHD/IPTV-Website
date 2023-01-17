import { createContext, useEffect } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    useEffect(() => {
        fetch('/testAPI')
        .then(res => res.json())
        .then(data => console.log(data))
        
    }, [])

    return (
        <AppContext.Provider
            value={{
                message: 123}}
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 