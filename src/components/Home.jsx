import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
function Home() {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>techstar</h1>
                    <p>Solution to all your problem</p>
                </main>
            </div>
            <div className="home2" id='contact'>
                <img src={vg} alt="graphics" />

                <div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui excepturi nulla sint! Officiis tempore culpa excepturi eius, libero pariatur, fugit tenetur tempora quasi dolorum laudantium?</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>

                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis laboriosam iste non quam ex, pariatur placeat blanditiis sit hic sed repudiandae. Eos cum animi repellendus minima, repudiandae non iure nisi consequuntur saepe provident, quia expedita laboriosam labore omnis odio repellat cupiditate minus quibusdam dolor. Repudiandae enim id odit distinctio exercitationem! Dolorem error commodi unde accusamus modi corrupti? Qui sunt doloremque accusamus repellendus illo in explicabo necessitatibus, dolorem corporis eveniet. Tempore quaerat quasi necessitatibus cumque eos.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={
                            {
                                animationDelay: '0.5s'
                            }
                        }>
                            <AiFillGoogleCircle/>
                            <p>Google</p>

                        </div>

                        
                        <div style={
                            {
                                animationDelay: '0.7s'
                            }
                        }>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>

                        </div>

                        
                        <div style={
                            {
                                animationDelay: '0.9s'
                            }
                        }>
                            <AiFillYoutube/>
                            <p>Youtube</p>

                        </div>

                        
                        <div style={
                            {
                                animationDelay: '1.5s'
                            }
                        }>
                            <AiFillInstagram/>
                            <p>Instagram</p>

                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
