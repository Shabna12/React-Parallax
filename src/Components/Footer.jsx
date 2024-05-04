import React from 'react'
import footlogo from '../Imgs/logo.png'

function Footer() {
  return (
    <>
       <footer>
           <div className="container foot">
              <div className="row">
                <div className="col-lg-6">
                   <img style={{height:'50px'}} src={footlogo} alt="" /> <br /> <br />
                   <h2 className='footh'>The National Aeronautics and Space Administration</h2> <br />
                   <p className='foottxt'>
                     NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
                   </p> <br />
                   <p> <a href="">About NASA's Mission</a> </p>
               </div> <br /> <br />
                <div className="col-lg-6">
                    <p><a href="">Home</a></p>
                    <p><a href="">News & Events</a></p>
                    <p> <a href="">Multimedia</a></p>
                    <p><a href="">NASA+</a></p>
                    <p><a href="">Missions</a></p>
                </div> <br /> <br />
                <div className="col-lg-6">
                    <p> <a href=""> Humans in Space</a> </p>
                    <p> <a href="">Earth & Climate</a> </p>
                    <p> <a href="">The Solar System</a> </p>
                    <p> <a href="">The Universe</a> </p>
                    <p> <a href="">Science</a>  </p>
                </div>
                <div className="col-lg-6"></div>
              </div>
              <hr />
           </div>
           <hr />
       </footer>
    </>
  )
}

export default Footer