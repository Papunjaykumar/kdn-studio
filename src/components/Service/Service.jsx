import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode,faChartBar,faCopy,faMarker,faUserGear,faCoins} from '@fortawesome/free-solid-svg-icons'


export default function Service() {
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
        <section id="service">
            <div className='container'>
                <div className='title_headline'>
                    <h3>What's Services we are offering to Our Customer</h3>
                </div>
                <div className='service_wrapper'>
                    <div className='service_box'>
                        <div className='service_icon blue_icon'>
                            {faLaptopCodeIcon}
                        </div>
                        <h4 className='number'>01</h4>
                        <div className='service_content'>
                            <h5>ARCHITECTURE DESIGN SERVICES</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>{faChartBarIcon}</div>
                        <h4 className='number'>02</h4>
                        <div className='service_content'>
                            <h5>INTERIOR DESIGN</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon green_icon'>
                            {faCopyIcon}
                        </div>
                        <h4 className='number'>03</h4>
                        <div className='service_content'>
                            <h5>ARCHITECTURE ENGINEERING SERVICES</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon '>
                            {faMarkerIcon}
                        </div>
                        <h4 className='number'>04</h4>
                        <div className='service_content'>
                            <h5>HOME BUILDING AND RENOVATIONS</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon green_icon'>
                            {faUserGearIcon}
                        </div>
                        <h4 className='number'>05</h4>
                        <div className='service_content'>
                            <h5>BIM</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon blue_icon'>
                            {faCoinsIcon}
                        </div>
                        <h4 className='number'>06</h4>
                        <div className='service_content'>
                            <h5>SITE MASTER PLANNING</h5>
                            <a href='/' className='read'>Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
