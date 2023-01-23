import { useLayoutEffect, useRef, useState, useContext } from 'react'
import { AppContext } from '../Context'
// import { Link } from 'react-router-dom'

import { gsap } from 'gsap'

import { FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {
    const { getUserForm } = useContext(AppContext)
    const [contactForm, setContactForm] = useState({
        username: '',
        email: '',
        userMessage: '',
    })
    
    function handleChange(event) {
        const { name, value } = event.target
    
        setContactForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        getUserForm(contactForm)
        setContactForm({
            username: '',
            email: '',
            userMessage: '',
        })
        console.log(`Hello ${contactForm.username}, thank you for leaving us a message!`)
        event.preventDefault()
    }


    const title = useRef(null)
    const message = useRef(null)
    const form = useRef(null)

    const didAnimate = useRef(false)


    useLayoutEffect(() => {

        if(didAnimate.current === true) {return}

        didAnimate.current = true
        let tl = gsap.timeline({
            defaults:{
                duration: .5,
            }
        })
        tl.from(title.current, {
            y: 50,
            opacity: 0
        })
        .from(message.current, {
            y: 50,
            opacity: 0
        })
        .from(form.current, {
            y: 50,
            opacity: 0
        })


    }, [])


    return (
        <div className='contacts--form'>
            
            <h3 ref={title}>Let's talk!</h3>
            <p ref={message}>Send us a message.</p>

            <form 
                ref={form} 
                className='contacts-form'
                onSubmit={handleSubmit}
            >
                <label htmlFor='fname'>What's your name?</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='username' 
                    placeholder='John Doe'
                    value={contactForm.username}
                    onChange={handleChange}
                />

                <label htmlFor='email'>Your Email too</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='John@doe.com'
                    value={contactForm.email}
                    onChange={handleChange}
                />

                <label htmlFor='msg'>Your Message goes here!</label>
                <input 
                    type='text' 
                    id='msg' 
                    name='userMessage' 
                    placeholder='Hi Watched.' 
                    value={contactForm.userMessage}
                    onChange={handleChange}
                />
                <button 
                    className='cta-form' 
                    type='submit'
                >
                    <span>Send</span>
                    <FaPaperPlane 
                        className='plane-icon'
                    />
                </button>

            </form>
        </div>
    );
}
 
export default ContactForm;