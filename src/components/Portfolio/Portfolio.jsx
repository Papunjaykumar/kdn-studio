import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/portfolio/project1.jpg'
import project2 from '../../assets/portfolio/project2.jpg'
import project3 from '../../assets/portfolio/project3.jpg'
import project4 from '../../assets/portfolio/project4.jpg'
import project5 from '../../assets/portfolio/project5.jpg'
import project6 from '../../assets/portfolio/project6.jpg'
export default function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <div className='container'>
                    <div className='portfolio_title'>
                        <h3>Projects</h3>
                        <p>We carry the core values of intergrity , creativity , and a relentless pursuit of perfection . Join us on this architectural journey , where every structure tells a unique story of vision , collaboration, and timeless design</p>
                    </div>
                    <div className='portfolio_wrapper'>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project1} alt='Project_Image'/>
                            </div>
                        </div>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project2} alt='Project_Image'/>
                            </div>
                        </div>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project3} alt='Project_Image'/>
                            </div>
                        </div>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project4} alt='Project_Image'/>
                            </div>
                        </div>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project5} alt='Project_Image'/>
                            </div>
                        </div>
                        <div className='portfolio_col'>
                            <div className='portfolio_image'>
                                <img src={project6} alt='Project_Image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
