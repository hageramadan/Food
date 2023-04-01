import React from "react";
import './Header.css';
const Header=()=>{
    return(
        <header id="home">
            <div className="container">
                <div className="col-md-6">
                    <h3>Good food choices are good investments.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button>Order Now<span><i class="material-icons ">local_grocery_store</i></span>  </button>
                    <button className="sbtn">Learn More <span><i className="material-icons">chevron_right</i></span></button>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
        </header>
    )
}

export default Header;