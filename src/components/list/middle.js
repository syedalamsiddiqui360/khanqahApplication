import React from 'react';
import Item from './item';

function Middle(props) {
  
    return (
        <div>
            <div class="row mb-5">
                {
                    props.list.slice(props.start, props.end).map((value, index) => {
                        return (<div class="col-md-6 col-lg-4 mb-4">
                            <div class="property-entry h-100">
                                <Item name={value.name} audioUrl={value.audioUrl} price={value.price} description={value.description} tag1={value.tag1} tag2={value.tag2} tag1CN={value.tag1CN} tag2CN={value.tag2CN} imgSrc={value.imgSrc} date={value.date} />
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div >

    );
}

export default Middle;
