import React from 'react'
import './Team.css'
import team1 from '../../assets/Team/team1.jpg'
import team2 from '../../assets/Team/team2.jpg'
import team3 from '../../assets/Team/team3.jpg'
import team4 from '../../assets/Team/team4.jpg'
import team5 from '../../assets/Team/team5.jpg'
import team6 from '../../assets/Team/team6.jpg'
export default function Team() {
    return (
        <>
            <section id="team">
                <div className='container'>
                    <div className='team_title'>
                        <h3>Our Team</h3>
                        <p>KD STUDIO Architects is a design- driven studio focused on delivering unique , functional and affordable results through continuous research experiments.We are a specialised team of Architects and Interior Designers.</p>
                    </div>
                    <div className='team_wrapper'>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team6} alt='team1' />
                            </div>
                            <div className='team_dtls'>
                                <h5>Ar. Kundan Singh</h5>
                                <p>Founder | Architect | BIM Consultant</p>
                            </div>
                        </div>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team4} alt='team1' />

                            </div>
                            <div className='team_dtls'>
                                <h5>Ar. Deepsumeet Singh</h5>
                                <p>Co-Founder | Architect | Interior Designer</p>
                            </div>
                        </div>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team3} alt='team1' />
                            </div>
                            <div className='team_dtls'>
                                <h5>Ar. Jacob Sam</h5>
                                <p>Architect  | Designer | 3D Modeller </p>
                            </div>

                        </div>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team5} alt='team1' />
                            </div>
                            <div className='team_dtls'>
                                <h5>Er. Rishu Ranjan Raj</h5>
                                <p>CIVIL  |  STRUCTURAL HEAD </p>
                            </div>
                        </div>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team2} alt='team1' />
                            </div>
                            <div className='team_dtls'>
                                <h5>Ar. Gaurav Tarak</h5>
                                <p>Architect | Interior Designer | 3D Modeller</p>
                            </div>
                        </div>
                        <div className='team_col'>
                            <div className='team_image'>
                                <img src={team1} alt='team1' />
                            </div>
                            <div className='team_dtls'>
                                <h5>Dr. Mrigendra Singh</h5>
                                <p>Civil | MEP Head</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
