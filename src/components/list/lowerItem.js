import React from 'react';

function LowerItem(props) {
    return (
        <div>
            <span class="d-block text-secondary small text-uppercase">{props.date}</span>
            <h2 class="h5 text-black mb-3"><a href="#">{props.title}</a></h2>
            <p>{props.description}</p>
        </div >

    );
}

export default LowerItem;


