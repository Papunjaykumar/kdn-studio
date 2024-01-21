import React from 'react'
import './Home.css'
import BannerImage from '../../assets/banner/banner1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faShieldHalved, faChartArea, faUserGroup, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    // icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldHalvedIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faHeart} />
    const faUserGroupIcon = <FontAwesomeIcon icon={faUserGroup} />
    return (
        <div>
            <section id="home">
                <div className='banner_image'></div>
                <div className='container'>
                    <div className='banner_outer'>
                        <div className='col'>
                            <h3 className='title'>
                                We strive to create  <span>Space</span>
                            </h3>
                            <p>KD Studio , a leading architectural firm dedicated to transformating visions into extraordinary spaces .
                                With a rich history of innovation and a unique blend of creativity and functionallity to every project</p>

                        </div>
                        <div className='col'>
                            <div className='sub_banner_image'>
                                <img src={BannerImage} alt='Banner_image' />
                            </div>
                        </div>

                    </div>
                    <div className='icon_style'>
                        <div className='banner_style_1'>
                            <div className='icon_img'>
                                {faShieldHalvedIcon}
                            </div>
                            <div className='icon_about'>
                                <h4>Innovation in design</h4>
                            </div>
                        </div>
                        <div className='banner_style_1'>
                        <div className='icon_img green_icon'>
                                {faUserGroupIcon}
                            </div>
                            <div className='icon_about'>
                                <h4>Interactive and iterative</h4>
                            </div>
                        </div>
                        <div className='banner_style_1'>
                        <div className='icon_img blue_icon'>
                                {faChartAreaIcon}
                            </div>
                            <div className='icon_about '>
                                <h4>Happy Clients</h4>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
