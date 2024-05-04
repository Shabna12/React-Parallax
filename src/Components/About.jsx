import AOS from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import abt1 from '../Imgs/nasa9.jpg'
import abt2 from '../Imgs/nasa10.jpg'


function About() {
    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
    
          // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
          offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
          delay: 100, // Add delay (in milliseconds) before the animation starts.
          duration: 800, // Set the duration (in milliseconds) of the animation.
          easing: 'ease', // Specify the easing function for the animation.
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
        // Clean up function
        return () => {
         AOS.refresh();
        };
        }, []);



  return (
    <>
      <h1 className="heading" data-aos="fade-down" >About</h1>
      <div className="about container-container">
          <div className="left-about" data-aos="fade-right">
              <h3 className='nashead'> National Aeronautics and Space Administration</h3>
              <p className='abouttxt'>The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research. Established in 1958, it succeeded the National Advisory Committee for Aeronautics (NACA) to give the U.S. space development effort a distinct civilian orientation, emphasizing peaceful applications in space science. It has since led most of America's space exploration programs, including Project Mercury, Project Gemini, the 1968 - 1972 Apollo Moon landing missions, the Skylab space station, and the Space Shuttle. Currently, NASA supports the International Space Station along with the Commercial Crew Program, and oversees the development of the Orion spacecraft and the Space Launch System for the lunar Artemis program.
              <br />
              NASA's science division is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons and planetary rovers such as Perseverance; and researching astrophysics topics, such as the Big Bang, through the James Webb Space Telescope, the Great Observatories and associated programs. The Launch Services Program oversees launch operations for its uncrewed launches.</p>
          </div>
          <div className="container">
             <div className="row" id='abtimg'>
                 <div className="col-md-6">
                    <img className='img-fluid' id='about1' src={abt1} alt="" data-aos="zoom-in"/>
                 </div>
                 <div className="col-md-6">
                    <p className='naswot1' data-aos="fade-right">NASA satellites discovered a 6-planet solar system in perfect synchrony</p>
                 </div>
             </div>
          </div>
          <div className="container">
          <div className="row" id='abtimg'>
              <div className="col-md-6">
                 <p className='naswot' data-aos="fade-right">NASA Launches International Mission SWOT to Survey Earth's Water</p>
              </div>
              <div className="col-md-6">
                 <img className='img-fluid' id='about2' src={abt2} alt="" data-aos="zoom-in"/>
              </div>
             </div>
          </div>
      </div>
   </>
  )
}



export default About