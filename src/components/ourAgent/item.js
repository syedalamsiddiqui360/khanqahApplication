import React from 'react';
import Audio from '../list/audio'

function Item() {
    return (

        <div class="col-md-6 col-lg-8 mb-lg-5">
            <div class="team-member">

                <div class="row ">
                    <div class="col-md-6 col-lg-6 property-entry " data-aos="fade-down" data-aos-delay="500">

                        <img src="assets/images/hero_bg_1.jpg" alt="Image" class="img-fluid rounded mb-4" />
                    </div>
                    <div class="col-md-6 col-lg-6 property-entry " data-aos="fade-down" data-aos-delay="600">

                        <img src="assets/images/hero_bg_2.jpg" alt="Image" class="img-fluid rounded mb-4" />
                    </div>
                </div>
 
                    <h2 class="font-weight-light text-black h4">Megan Smith</h2>
                   {/* <span class="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!</p>
                    <p>
                        <a href="#" class="text-black p-2"><span class="icon-facebook"></span></a>
                        <a href="#" class="text-black p-2"><span class="icon-twitter"></span></a>
                        <a href="#" class="text-black p-2"><span class="icon-linkedin"></span></a>
                    </p> */}
                    <div data-aos="fade-left" data-aos-delay="900">

                    
                    <Audio audioUrl={"audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3"}/>
 </div>
            </div>
        </div>
    )
}

export default Item;