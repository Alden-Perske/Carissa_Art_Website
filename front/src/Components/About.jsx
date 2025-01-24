import React from 'react'
import '../CSS/About.css'
import Blender from '../Assests/blender.svg'
import canva from '../Assests/canva.svg'
import csp from '../Assests/csp.svg'
import ps from '../Assests/photoshop.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCanva } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div id='about'>

            <div id='about_teks' className='gray'>
                <h1>Education</h1>
                <hr />

                <h2>South Africa</h2>
                <ul>
                    <li><h3>Academy of digital arts</h3></li>
                    <ul>
                        <li>Concept Art One-Year Certificate (2024)</li>
                        <li>Photoshop Certification (2023)</li>
                        <li>Book Illustration Workshop (2024)</li>
                    </ul>
                </ul>


                <h2>Continuing Education in America</h2>

                <ul>
                    <li><h3>Hudson County Community College in NJ:</h3></li>
                    <ul>
                        <li>36-hour Drawing Explorations class (2021)</li>
                        <li>36-hour Exploring Digital Photography course (2021)</li>
                    </ul>

                    <li><h3>School of Visual Arts in NYC:</h3></li>
                    <ul>
                        <li>Background Illustrations class (2022)</li>
                        <li>Summer Illustration Residency (2022)</li>
                        <li>Building Fictional Worlds class (2022)</li>
                    </ul>

                </ul>



            </div>



            <div id='tech' className='gray'>
                <h1>Technology</h1>
                <hr />

                    <div id='techInner' >
                        <div>
                            <img src={Blender} alt="" className='icon'/>
                            <p className='icon-teks'> Blender</p>
                        </div>

                        <div >
                            <img src={canva} alt="" className='icon' />
                            <p className='icon-teks'>Canva</p>
                        </div>

                        <div>
                            <img src={csp} alt="" className='icon'/>
                            <p className='icon-teks'>Clip Studio Paint</p>
                        </div>

                        <div>
                            <img src={ps} alt="" className='icon'/>
                            <p className='icon-teks'>Photo Shop</p>
                        </div>

                    </div>

                        
                

            </div>

            <div id='skill' className='gray'>
                <h1>Skills</h1>
                <hr />
                <div id='skillsteks'>
                    <p>Concept Art</p>
                    <p>Environment Design</p>
                    <p>Rendering</p>
                    <p>Storyboarding</p>
                    <p>3D Modeling</p>
                    <p>Character Design</p>
                    <p>Creature Design</p>
                    <p>Visual Development</p>
                    <p>Photo-manipulation</p>
                    <p>World Building</p>
                    <p>Costume Design</p>

                </div>
            </div>
        </div>
    )
}

export default About