import { useLayoutEffect, useRef, useContext } from 'react'
import { useForm } from "react-hook-form";
import { gsap } from 'gsap'
import { FaPaperPlane } from 'react-icons/fa'

import { AppContext } from '../Context'
// import { Link } from 'react-router-dom'

const ContactForm = () => {
    const { getUserForm } = useContext(AppContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => getUserForm(data)

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
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='input-container'>
                    <label htmlFor='fname'>What's your name?</label>
                    <input 
                        type='text' 
                        id='fname' 
                        {...register('username', { required: true })} 
                        placeholder='John Doe'
                        className={errors.username ? 'in-valid' : 'valid'}
                        />
                    {errors.username && <span className='error-message'>Please provide a name</span>}
                </div>

                <div className='input-container'>
                    <label htmlFor='email'>Your Email too</label>
                    <input 
                        type='email' 
                        id='email' 
                        {...register('email', { required: true })} 
                        placeholder='John@doe.com'
                        className={errors.email ? 'in-valid' : 'valid'}
                        />
                    {errors.email && <span className='error-message'>Please provide an email</span>}
                </div>


                <div className='input-container'>
                    <label htmlFor='msg'>Your Message goes here!</label>
                    <input 
                        type='text' 
                        id='msg' 
                        {...register('userMessage', { required: true })} 
                        placeholder='Hi Watched.'
                        className={errors.userMessage ? 'in-valid' : 'valid'}
                        />
                    {errors.userMessage && <span className='error-message'>Please leave us a nice message!</span>}
                </div>

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