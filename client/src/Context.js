import { createContext, useEffect, useState } from 'react'

import { API_URL } from './config'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState([])
    const [productId, setProductId] = useState('')
    const [productFound, setProductFound] = useState([])
    const [userFrom, setUserForm] = useState({})
    const [validationMessage, setValidationMessage] = useState('')

    useEffect(() => {
        fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => setMessage(data))
    }, [])

    useEffect(() => {
        fetch(`${API_URL}/products/${productId || localStorage.getItem('productId') || 'firstLoad' }`)
        .then(res => res.json())
        .then(data => setProductFound(data))
        
    }, [productId])

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userFrom)
        }

        fetch(`${API_URL}/messages`, requestOptions)
        .then(res => res.json())
        .then(data => setValidationMessage(data))

    }, [userFrom])

    
    function getProductId(id) {
        setProductId(id)
        localStorage.setItem('productId', id)
        
    }

    function getUserForm(obj) {
        setUserForm(obj)
    }

    return (
        <AppContext.Provider
            value={{ message, getProductId, productFound, getUserForm, validationMessage }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 