import React from 'react'
import './Contact.css'
import contact_image from '../../assets/contact/contact.jpg'

export default function Contact() {
    return (
        <>
            <section id='contact'>
                <div className='container'>
                    <div className='contact_wrapper'>
                        <div className='contact_col'>
                            <div className='contact_image'>
                                <img src={contact_image} alt='contact_image' />
                            </div>
                        </div>
                        <div className='contact_col'>
                            <h2>Contact Us</h2>
                            <form>
                                <div className='input_wrapper'>
                                    <input type='text' className='form-control' placeholder='Your name..' autoComplete='off' />
                                </div>
                                <div className='input_wrapper'>
                                    <input type='text' className='form-control' placeholder='Your Phone..' autoComplete='off' />
                                </div>
                                <div className='input_wrapper'>
                                    <input type='email' className='form-control' placeholder='Your Email..' autoComplete='off' />
                                </div>
                                <div className='input_wrapper'>
                                    <textarea placeholder='Write a message'></textarea>
                                </div>
                                <div className='btn_wrapper'>
                                    <button type='submit' class='btn'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
