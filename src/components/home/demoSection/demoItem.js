import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Item(props) {
    const { data , name ,path } = props
  const history = useHistory();
    const url = "http://localhost:9000/audio/get/"


    useEffect(() => {
    }, [data])

    return (
        <div class="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-delay={300}>

            <div class="p-1 bg-white border rounded">
                <h2 class="h2 text-center mb-1">{name}</h2>
                {
                    data.map((item) => {
                        return (
                            <div class="p-2 " >
                                <AudioPlayer
                                    autoPlayAfterSrcChange={false}
                                    src={url+item.fileName}
                                />
                            </div>
                        )
                    })
                }

                <a class="service text-center">
                    <p><span class="read-more" style={{cursor: 'pointer'}} onClick={()=>{history.push(`${path}`,{ listType: "audio", categoryId: 0, personId: 0 })}}>View More</span></p>
                </a>
            </div>
        </div>

    );
}

export default Item;


