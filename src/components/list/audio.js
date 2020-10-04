import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Audio(props) {
    return (
        <div>
             <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src={props.audioUrl}
                    style={{paddingTop:"11%"}}
                /> 
        </div >

    )
}

export default Audio;