import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'

import { FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {

    const title = useRef(null)
    const message = useRef(null)
    const form = useRef(null)

    const didAnimate = useRef(false)


    useLayoutEffect(() => {

        if(didAnimate.current === true) {return}

        didAnimate.current = true
        let tl = gsap.timeline({
            defaults:{
                duration: 1,
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

            <form ref={form} className='contacts-form'>
                <label htmlFor='fname'>What's your name?</label>
                <input type='text' id='fname' name='fname' placeholder='John Doe'/>

                <label htmlFor='email'>Your Email too</label>
                <input type='email' id='email' name='email' placeholder='John@doe.com'/>

                <label htmlFor='msg'>Your Message goes here!</label>
                <input type='text' id='msg' name='msg' placeholder='Hi Watched.' />

                <a href='/contacts' className='cta-form' type='submit'>
                    <span>Send</span>
                    <FaPaperPlane 
                        className='plane-icon'
                    />
                </a>

            </form>
        </div>
    );
}
 
export default ContactForm;