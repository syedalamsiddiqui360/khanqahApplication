import React from 'react';

function LowerItem1(props) {
    return (
        <div>
            <h2 class="property-title"><a href="property-details.html">{props.name}</a></h2>
            <span class="property-location d-block mb-3"> {props.description}</span>
            <strong class="property-price text-primary mb-3 d-block text-success">Date: {props.date}</strong>
        </div >

    );
}

export default LowerItem1;


