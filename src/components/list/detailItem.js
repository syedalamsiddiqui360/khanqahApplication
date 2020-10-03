import React from 'react';

function DetailList(props) {
    const url = "audio/mohorrm.mp3"
    const image = "assets/images/person_3.jpg"
    return (
        <div>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="property-entry horizontal d-lg-flex">

                        <a href="#" class="property-thumbnail h-100">
                            <div class="offer-type-wrap">
                                <span class={props.tag1CN}>{props.tag1}</span>
                                <span class={props.tag2CN}>{props.tag2}</span>
                            </div>
                            <img src={props.imgSrc} alt="Image" class="img-fluid" />
                        </a>

                        <div class="p-4 property-body">
                            <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                            <h2 class="property-title"><a href="#">{props.name}</a></h2>
                            <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> {props.description}</span>
                            <strong class="property-price text-primary mb-3 d-block text-success">${props.price}</strong>
                            <p>{props.detailDescription}</p>
                            {/* <ul class="property-specs-wrap mb-3 mb-lg-0">
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
                                        </ul> */}
                        </div>

                    </div>
                </div>
            </div>

        </div >

    );
}

export default DetailList;


