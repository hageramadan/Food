import React from "react";
import './OurFood.css';
import Card from 'react-bootstrap/Card';
import Food1 from './../images/food1.jpg';
import Food2 from './../images/food2.jpg';
import Food3 from './../images/food3.jpg';

const OurFood=()=>{
    return(
        <div className="container main-food">
            <div className="titleFood">
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                   <Card style={{ width: '22rem' , border:'0'}} className="card">
                     <Card.Img variant="top" src={Food1} className="cardimg"/>
                        <Card.Body className="cardbody">
                            <Card.Title className="cardtitle">Rainbow Vegetable Sandwich</Card.Title>
                            <Card.Text className="cardp">
                            Time: 15 - 20 Minutes | Serves: 1
                            </Card.Text>
                            <div className="price">
                            <strong>$10.50 </strong>
                            <del> $11.70</del>
                            </div>
                            <hr/>
                            <button>Order Now</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-12">
                   <Card style={{ width: '22rem' , border:'0'} } className="card">
                     <Card.Img variant="top" src={Food2} className="cardimg"/>
                        <Card.Body className="cardbody">
                            <Card.Title className="cardtitle">Vegetarian Burger</Card.Title>
                            <Card.Text className="cardp">
                            Time: 30 - 45 Minutes | Serves: 1
                            </Card.Text>
                            <div className="price">
                            <strong>$9.20 </strong>
                            <del> $10.50</del>
                            </div>
                            <hr/>
                            <button>Order Now</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-12">
                   <Card style={{ width: '22rem' , border:'0'}} className="card">
                     <Card.Img variant="top" src={Food3} className="cardimg"/>
                        <Card.Body className="cardbody">
                            <Card.Title className="cardtitle">Raspberry Stuffed French Toast</Card.Title>
                            <Card.Text className="cardp">
                            Time: 10 - 15 Minutes | Serves: 1
                            </Card.Text>
                            <div className="price">
                            <strong>$12.50</strong>
                            <del> $13.20</del>
                            </div>
                            <hr/>
                            <button>Order Now</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default OurFood;