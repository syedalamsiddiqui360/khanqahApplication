import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';import React from 'react';

function Item(props) {
    const url = "audio/mohorrm.mp3"
    const image = "assets/images/person_3.jpg"
    return (
        <div class="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-delay={props.delay}>

            <div class="p-2 bg-white border rounded">
            <h2 class="h3 text-center mb-1"><a href="#">{props.name}</a></h2>
           <div class="p-2 " > <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src="audio/140516_002.MP3"
                    style={{ paddingBottom: "0%" }}
                  />
               </div>
               <div class="p-2 " > <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src="audio/140516_002.MP3"
                    style={{ paddingBottom: "0%" }}
                  />
               </div>
               <div class="p-2 " > <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src="audio/140516_002.MP3"
                    style={{ paddingBottom: "0%" }}
                  />
               </div>
               <a class="service text-center">
               <p><span class="read-more">More</span></p>
               </a>
                {/* <span class="d-block text-secondary small text-uppercase">{props.date}</span>
                <h2 class="h5 text-black mb-3"><a href="#">{props.name}</a></h2>
                <p>{props.description}</p> */}
            </div>
        </div>

    );
}

export default Item;


