import React from 'react';
import './Testmonial.css';
import Carousel from 'react-bootstrap/Carousel';
import test1 from './../images/test1.jpg';
import test2 from './../images/test2.jpg';
const Testmonial=()=>{
    return(
        <section className="maintest" id='testi'>
            <h1>Testimonials</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                    <Carousel>
                <Carousel.Item id="testitem">
                    <img src={test1}/>
                    <Carousel.Caption>
                    <p>"Far far away, behind the word mountains,  there live the blind texts Far far from the countries Vokalia and Consonantia,. "</p>
                   <h3>Maccy Doe - Front End</h3>
                   </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="testitem">
                <img src={test2} />

                    <Carousel.Caption>
                    <p>"Far far away behind the word mountains there  Far far from the countries Vokalia and Consonantia,." </p>
                    <h3>Jonthan Doe - UX Designer</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="testitem">
                <img src={test1} />

                    <Carousel.Caption>
                    <p>"Far far from the countries Vokalia and , there live the blind texts. Separated they live."</p>
                    <h3>Simab Dave - Web Designer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                    </div>
                </div>
          
            </div>
           
                 
        </section>
    )
}

export default Testmonial