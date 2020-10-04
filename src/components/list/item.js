import React from 'react';

import LowerItem from './lowerItem'
import LowerItem1 from './lowerItem1'
import Audio from './audio'

function Item(props) {
    return (
        <>
            <div href="property-details.html" class="property-thumbnail">
                <div class="offer-type-wrap" style={{display:"flex",flexDirection:"row"}}>
                    <span class={props.tag1CN}>{props.tag1}</span>
                    <span class={props.tag2CN}>{props.tag2}</span>
                </div>
               <Audio audioUrl={props.audioUrl} />
            </div>
            <div class="p-4 property-body">
                <LowerItem name={props.name} description={props.description} date={props.date} />
            </div>
        </>
    );
}

export default Item;
