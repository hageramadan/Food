import React, { Fragment } from "react";
import Header from "./Header";
import Numbers from "./Numbers";
import foodimg from "./../images/1.png";
import cakeimg from "./../images/2.png";
import OurFood from "./OurFood";
import Testmonial from "./Testmonial";


const Home =()=>{
    return(
        <Fragment>
             <Header/>
             <Numbers/>
             <section id="about" className="food">
               <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                          <img src={foodimg} title="food" className="foodimg" />
                        </div>
                        <div className="col-md-5 info-food">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button>Learn more</button>
                        </div>

                    </div>
               </div>
             </section>

             <section id="explor" className="cake">
               <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                             <h2>We make everything by hand with the best possible ingredients.</h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                             <br/>
                             <p><i className="material-icons">check</i> Etiam sed dolor ac diam volutpat.</p>
                             <p><i className="material-icons">check</i> Erat volutpat aliquet imperdiet.</p>
                             <p><i className="material-icons">check</i> purus a odio finibus bibendum.</p>
                             <button>Learn more</button>
                         
                        </div>
                            <div className="col-md-7 ">
                            <img src={cakeimg} title="food" className="foodimg" />
                        </div>
                    </div>
               </div>
             </section>

             <section id="explore" className="donat">
                <div className="container">
                <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button><i className="material-icons">play_circle_filled</i> Watch Our Story</button>
                </div>
             </section>
             <OurFood/>
             <Testmonial/>
             {/* FAQ */}
             <section className="faq" id="fqa">
              <div className="container">
                <h1>Frequently Asked Questions</h1>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <h4><i class="material-icons">local_dining</i> Is Foodera Bread really baked fresh each day?</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <h4><i class="material-icons">local_dining</i>  Do you bake breads containing animal fats or products?</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <h4><i class="material-icons">local_dining</i> Can I order your products online?</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <h4><i class="material-icons">local_dining</i>  When are you opening a shop near me?</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                  </div>
                </div>
              </div>
             </section>
             {/* static background */}
             <section className="sback">
              <div className="overlay">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <h3>Baked fresh daily by bakers with passion.</h3>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <button>Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
             </section>
             {/* subscripe */}
             <section className="subs">
              <div className="container">
                  <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                  <p>Limited time offer for this month. No credit card required</p>
                  <div className="forma">
                    <div className="row">
                      <div className="col-lg-2"></div>
                      <div className="col-lg-5">
                      <input placeholder="Email Address here" type="email"/>
                      </div>
                      <div className="col-lg-2">
                      <button>Subscribe</button>
                      </div>
                      <div className="col-lg-2"></div>
                    </div>
             
                    
                  </div>
              </div>
             </section>
             <footer>
                <ul>
                  <li><a href="#">Rejister</a></li>
                  <li><a href="#">Forum</a></li>
                  <li><a href="#">Affiliate</a></li>
                  <li><a href="#fqa">FQA</a></li>
                 
                </ul>
                <p>&copy;2023. Foodera. All rights reserved.</p>

             </footer>
        </Fragment>
       
    )
}

export default Home;