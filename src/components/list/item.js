import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import LowerItem from './lowerItem'
import LowerItem1 from './lowerItem1'

function Item(props) {
    return (
        <>
            <div href="property-details.html" class="property-thumbnail">
                <div class="offer-type-wrap" style={{display:"flex",flexDirection:"row"}}>
                    <span class={props.tag1CN}>{props.tag1}</span>
                    <span class={props.tag2CN}>{props.tag2}</span>
                </div>
                <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src={props.audioUrl}
                    style={{paddingTop:"12%"}}
                />
            </div>
            <div class="p-4 property-body">
                <LowerItem name={props.name} description={props.description} date={props.date} />
            </div>
        </>
    );
}

export default Item;
