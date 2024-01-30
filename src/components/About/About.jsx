import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function About() {

    const faBussinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <section id='about'>
                <div className='container'>
                    <div className='title_heading'>
                        <h3>We provide the best for you.</h3>
                        <p>KD Design,is a design-driven studio focus on delivering unique,functional and affordable results through continuous research experiments. We are specialised team of architects and interior designer.</p>
                    </div>
                    <div className='about_box_wrapper'>
                        <div className='about_box'>
                            <div className='about_icon'>
                                {faBussinessIcon}
                            </div>
                            <div className='about_content'>
                                <h5>Our Mission</h5>
                                <p>Our mission is to redefine architectural possibilities and exceed the expectations of our clients. We strive to create spaces that not only reflect the values and identity of our clients but also contribute positively to the built environment.Through meticulous attention to details and a commitment to sustainable practices. We aim to leave a lasting impact on the communities we serve.</p>
                            </div>
                        </div>
                        <div className='about_box'>
                            <div className='about_icon green_icon'>
                                {faChartPieIcon}
                            </div>
                            <div className='about_content'>
                                <h5>Our Approach</h5>
                                <p>At KD Design Studio, our approach is rooted in collaboration, innovation, and a profound understanding of our client’s need.We believe in the power of architecture to shape experiences and enhance lives. Our team of passionate architects combines artistic vision with technical expertise, ensuring that each project is a harmonious balance of aesthetics and functionalilty.</p>
                            </div>
                        </div>
                        <div className='about_box'>
                            <div className='about_icon blue_icon'>
                                {faTruckFastIcon}
                            </div>
                            <div className='about_content'>
                                <h5>Our Vision</h5>
                                <p>At KD Design Studio, our vision is to be a beacon of innovation in the architecture landscape. We aspire to be at the forefront of design trends, pushing boundaries and setting new standards for excellence. We envision a future where our As we embark on each project, we carry with us the core values of intergrity, creativity, and a relentless pursuit of perfection. Join us on this architectural journey .
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </section>
        </>
    )
}
