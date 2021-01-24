import React from 'react';
import Item from './item';
import DetailItem from './detailItem';

function Middle(props) {

    return (
        <div>
            <div class="row">
                {
                    props.list.slice(props.start, props.end).map((value, index) => {
                        return (<div class="col-md-6 col-lg-4 mb-4" data-aos="fade-down" data-aos-delay={400}>
                            <div class="property-entry h-100">
                                {props.listType == "pdf" &&
                                    <DetailItem title={value.title} name={value.name} audioUrl={value.audioUrl} price={value.price} description={value.description} tag1={value.tag1} tag2={value.tag2} tag1CN={value.tag1CN} tag2CN={value.tag2CN} fileName={value.fileName} imageName={value.imageName} date={value.date} />
                                }
                                {props.listType == "audio" &&
                                    <Item name={value.name} title={value.title} audioUrl={value.fileName} price={value.place} description={value.description} tag1={value.tag1} tag2={value.tag2} tag1CN={value.tag1CN} tag2CN={value.tag2CN} imgSrc={value.imgSrc} date={value.date} />
                                }
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
