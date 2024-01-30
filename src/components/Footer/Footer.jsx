import React, { useState, useEffect } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />
    // state
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    const listToScroll=()=>{
        let heightToHidden=250;
        const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;
        (windowScroll>heightToHidden? setIsVisible(true):setIsVisible(false));

    }

    useEffect(()=>{
        window.addEventListener("scroll",listToScroll);
    })

    return (
        <>
            <section className='container'>
                <footer className='footer'>
                    <p>Copyright &copy; All Right Reserved 2023 KD Design Studio</p>
                </footer>
            </section>
            {/* scroll to tp */}
            {
                isVisible && (
                    <div className='scroll_top' onClick={scrollToTop}>
                        {faArrowUpIcon}
                    </div>
                )
            }

        </>
    )
}
