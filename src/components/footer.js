import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
// import 'font-awesome/css/font-awesome.css'
//import ".../node_modules"

function Footer() {
const [counter , setCounter] = useState(1);


    return (
        <div>

            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="mb-5">
                                <h3 class="footer-heading mb-4">About Homeland</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                            </div>



                        </div>
                        <div class="col-lg-4 mb-2 mb-lg-0">
                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <h3 class="footer-heading mb-4">Navigations</h3>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <ul class="list-unstyled">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><a href="#">Buy</a></li>
                                        <li><a href="#">Rent</a></li>
                                        <li><a href="#">Properties</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <ul class="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Terms</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div class="col-lg-4 mb-2 mb-lg-0">
                            <h3 class="footer-heading mb-4">Follow Us</h3>

                            <div>
                                <a href="#" class="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                <a href="#" class="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                <a href="#" class="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                <a href="#" class="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                            </div>



                        </div>

                    </div>
                    
                </div>
            </footer>




        </div>
    );
}

export default Footer;
