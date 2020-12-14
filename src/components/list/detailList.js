import React from 'react';
import DetailItem from './detailItem';


function DetailList(props) {
    return (
        <div>
            {
                props.list.slice(props.start, props.end).map((value, index) => {
                    return (
                                <DetailItem title={value.title} name={value.name} audioUrl={value.audioUrl} price={value.price} description={value.description} tag1={value.tag1} tag2={value.tag2} tag1CN={value.tag1CN} tag2CN={value.tag2CN} fileName={value.fileName} imageName={value.imageName} date={value.date} />
                    )
                })
            }
     </div >
    );
}

export default DetailList;


