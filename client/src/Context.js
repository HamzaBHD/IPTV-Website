import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

function ContextProvider (props) {

    const [message, setMessage] = useState([])
    const [productId, setProductId] = useState('')
    const [productFound, setProductFound] = useState([])
    const [userFrom, setUserForm] = useState({})
    const [validationMessage, setValidationMessage] = useState('')

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

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userFrom)
        }

        fetch('/messages', requestOptions)
        .then(res => res.json())
        .then(data => setValidationMessage(data))

    }, [userFrom])

    
    function getProductId(id) {
        setProductId(id)
        localStorage.setItem('productId', id)
    }

    function clearCard() {
        setProductId('')
        localStorage.clear('productId')
        console.log('I was clicked')
    }

    function getUserForm(obj) {
        setUserForm(obj)
    }

    console.log(userFrom)

    return (
        <AppContext.Provider
            value={{ message, getProductId, productFound, clearCard, getUserForm, validationMessage }} 
        >
            {props.children}
        </AppContext.Provider>
    )


}

export { AppContext, ContextProvider } 