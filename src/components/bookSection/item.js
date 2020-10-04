import React from 'react';
import SmallSlider from '../smallSlider'

function Item(props) {
    const data = [
        {
            name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            imgSrc: "assets/images/img_1.jpg",
            audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
            date: "Jan 20th, 2019",
            delay: 200
        },
        {
            name: "140516_002.MP3",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            imgSrc: "assets/images/img_2.jpg",
            audioUrl: "audio/140516_002.MP3",
            date: "Jan 20th, 2019",
            delay: 300

        },
        {
            name: "140603_001.MP3",
            description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
            audioUrl: "audio/140603_001.MP3",
            imgSrc: "assets/images/img_3.jpg",
            date: "Jan 20th, 2019",
            delay: 400

        }
    ]


    return (
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="property-entry h-100">
    <h2 class="h5 text-center p-3"><a href="#">{props.name}</a></h2>
                <a href="property-details.html" class="property-thumbnail p-3">
                  {/* <div class="offer-type-wrap">
                    <span class="offer-type bg-danger">Sale</span>
                    <span class="offer-type bg-success">Rent</span>
                  </div> */}
                  <SmallSlider data={data} />
                  {/* <img src="assets/images/img_1.jpg" alt="Image" class="img-fluid" /> */}
                </a>
                {/*<div class="p-4 property-body">
                   <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                  <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                  <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                  <ul class="property-specs-wrap mb-3 mb-lg-0">
                    <li>
                      <span class="property-specs">Beds</span>
                      <span class="property-specs-number">2 <sup>+</sup></span>

                    </li>
                    <li>
                      <span class="property-specs">Baths</span>
                      <span class="property-specs-number">2</span>

                    </li>
                    <li>
                      <span class="property-specs">SQ FT</span>
                      <span class="property-specs-number">7,000</span>

                    </li>
                  </ul> 

                </div>*/}
              </div>

            {/* <div class="col-md-6 col-lg-4 mb-4">
              <div class="property-entry h-100">
                <a href="property-details.html" class="property-thumbnail">
                  <div class="offer-type-wrap">
                    <span class="offer-type bg-danger">Sale</span>
                    <span class="offer-type bg-success">Rent</span>
                  </div>
                  <img src="assets/images/img_2.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="p-4 property-body">
                  <a href="#" class="property-favorite active"><span class="icon-heart-o"></span></a>
                  <h2 class="property-title"><a href="property-details.html">871 Crenshaw Blvd</a></h2>
                  <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                  <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                  <ul class="property-specs-wrap mb-3 mb-lg-0">
                    <li>
                      <span class="property-specs">Beds</span>
                      <span class="property-specs-number">2 <sup>+</sup></span>

                    </li>
                    <li>
                      <span class="property-specs">Baths</span>
                      <span class="property-specs-number">2</span>

                    </li>
                    <li>
                      <span class="property-specs">SQ FT</span>
                      <span class="property-specs-number">1,620</span>

                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="property-entry h-100">
                <a href="property-details.html" class="property-thumbnail">
                  <div class="offer-type-wrap">
                    <span class="offer-type bg-info">Lease</span>
                  </div>
                  <img src="assets/images/img_3.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="p-4 property-body">
                  <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                  <h2 class="property-title"><a href="property-details.html">853 S Lucerne Blvd</a></h2>
                  <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                  <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                  <ul class="property-specs-wrap mb-3 mb-lg-0">
                    <li>
                      <span class="property-specs">Beds</span>
                      <span class="property-specs-number">2 <sup>+</sup></span>

                    </li>
                    <li>
                      <span class="property-specs">Baths</span>
                      <span class="property-specs-number">2</span>

                    </li>
                    <li>
                      <span class="property-specs">SQ FT</span>
                      <span class="property-specs-number">5,500</span>

                    </li>
                  </ul>

                </div>
              </div>
            </div> */}
            </div>


    )
}

export default Item;