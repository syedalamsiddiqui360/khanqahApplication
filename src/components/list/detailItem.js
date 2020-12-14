import React from 'react';

function DetailItem(props) {
    // const url = "audio/mohorrm.mp3"
    const fileUrl = "http://localhost:9000/pdf/get/" + props.fileName
    const imageUrl = "http://localhost:9000/pdf/get/" + props.imageName        //720x460
    const downloadUrl = "http://localhost:9000/pdf/download/" + props.imageName
    return (
        <div>
            <a href={imageUrl} target="_blank" class="property-thumbnail h-100">
                <div class="offer-type-wrap">
                    <span class={props.tag1CN}>{props.tag1}</span>
                    <span class={props.tag2CN}>{props.tag2}</span>
                </div>
                <img src={fileUrl} alt="Image" class="img-fluid" />       
            </a>
            <div class="p-4 property-body">
                {/* <span class="d-block text-secondary small text-uppercase">{props.date}</span> */}
                <h2 class="h5 text-black mb-3">{props.title}</h2>
                <h2 class="property-title">{props.name}</h2>
                <p>{props.description}</p>
                <a href={downloadUrl}><span class="property-location d-block mb-3"><span class="property-icon icon-download"></span> download</span></a>
                {/* <strong class="property-price text-primary mb-3 d-block text-success">Date: {props.date}</strong> */}
            </div>


        </div >

    );
}

export default DetailItem;


