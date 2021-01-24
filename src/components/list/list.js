import React, { useState } from 'react';
import Lower from './lower';
import Middle from './middle';
import Upper from './upper';
 


function List(props) {

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(props.noOfItem);

  const click = (start, end) => {
    setStart(start)
    setEnd(end)
  };

  const setChunks = () => {
    props.callChunks()
  };

  const setData = (person , type , category , search) => {
    props.callData(person , type , category , search)
  };

  return (
    <div>
      <Upper list={props.data} personId={props.personId} updateUper={props.updateUper} categoryId={props.categoryId} typeId={props.typeId} setData={setData} />
      <div class="site-section site-section-sm bg-light">
        <div class="container">
          <Middle listType={props.listType} list={props.data} start={start} end={end} />
          <Lower length={props.size} updateLower={props.updateLower} itemPerPage={props.noOfItem} start={start} end={end} setData={click} setChunks={setChunks} />
        </div>
      </div>
    </div >

  );
}

export default List;