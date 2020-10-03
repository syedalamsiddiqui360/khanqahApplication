import React from 'react';

function Item(props) {
    const url = "audio/mohorrm.mp3"
    const image = "assets/images/person_3.jpg"
    return (
        <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={props.delay}>

            <a href="#"><img src={props.imgSrc} alt="Image" class="img-fluid" /></a>
            <div class="p-4 bg-white">
            <audio controls>
                        <source src={props.audioUrl} type="audio/mpeg" />
                    </audio>
                <span class="d-block text-secondary small text-uppercase">{props.date}</span>
                <h2 class="h5 text-black mb-3"><a href="#">{props.name}</a></h2>
                <p>{props.description}</p>
            </div>
        </div>

    );
}

export default Item;


