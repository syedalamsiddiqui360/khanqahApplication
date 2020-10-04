import React from 'react';
import DetailItem from './detailItem';


function DetailList(props) {
    return (
        <div>
            {
                props.list.slice(props.start, props.end).map((value, index) => {
                    return (
                                <DetailItem name={value.name} audioUrl={value.audioUrl} price={value.price} description={value.description} tag1={value.tag1} tag2={value.tag2} tag1CN={value.tag1CN} tag2CN={value.tag2CN} imgSrc={value.imgSrc} date={value.date} />
                    )
                })
            }
     </div >
    );
}

export default DetailList;

