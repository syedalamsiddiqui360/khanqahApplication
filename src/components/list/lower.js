import React, { useState, useEffect } from 'react';

function Lower(props) {
  const [counter, setCounter] = useState(1);
  const [noOfButton, setNoOfButton] = useState(1);
  const [button, setButton] = useState();

  useEffect(() => {
    setButton(Math.ceil(props.length / props.itemPerPage))
    // console.log(props.length + " " + props.itemPerPage +" "+ button)
    let value = props.itemPerPage * counter;
    let start = value - props.itemPerPage;
    //  console.log(start + " from lower" + value+" noOfbutton"+ noOfButton +" counter"+counter +" "+props.noOfButton)
    props.setData(start, value)
  }, [counter, props.length, props.noOfButton]);

  useEffect(() => {
    setNoOfButton(1)
    setCounter(1)
    //  console.log(" noOfbutton"+ noOfButton +" counter"+counter +" "+props.noOfButton)
  }, [props.updateLower]);

  const clickNext = () => {
    if (counter >= button) {
      setCounter(counter);
    } else {
      noOfButton != button ? increaseNoOfButton() : setNoOfButton(noOfButton)
      setCounter(counter + 1)
    }
  };

  const increaseNoOfButton = () => {
    props.setChunks()
    setNoOfButton(noOfButton + 1)
  };

  const clickPre = () => {
    if (counter == 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1)
    }
  };

  return (
    <div>
      <div class="col-md-12 text-center">
        <div class="site-pagination">
          <div class="row mt-5">
            <div class="col-md-12 text-center">

              <a class="active" style={counter === 1 ? { pointerEvents: 'none' } : { pointerEvents: '' }} href="#" onClick={clickPre}>Prev</a>
              {new Array(noOfButton).fill("").map((value, index) => {

                return (
                  <>
                    <a onClick={() => { setCounter(index + 1) }} class={index + 1 === counter ? "active" : ""} href="#">{index + 1}</a>
                  </>
                )
              })
              }
              {
                noOfButton >= button ? <></> : <span>...</span>
              }
              <a class="active" href="#" style={counter >= button ? { pointerEvents: 'none' } : { pointerEvents: '' }} onClick={clickNext}>Next</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Lower;











// <div className="d-flex justify-content-center">
// <nav aria-label="Page navigation example">
//   <ul class="pagination">
//   <li class="page-item"><a class="page-link" href="">Previous</a></li>

//   {new Array(noOfButton).fill("").map((e1, index) => {
//             return (
//             <li class="page-item"><a class="page-link" href="">{index+1}</a></li>
//             )
//           })
//           }


//     <li class="page-item"><a class="page-link" href="!#">Next</a></li>
//   </ul>
// </nav>



//           {/* <div class="site-pagination" onClick={set}>
//             <a href="#" class="active">1</a>
//             <a href="#">2</a>
//             <a href="#">3</a>
//             <a href="#">4</a>
//             <a href="#">5</a>
//             <span>...</span>
//             <a href="#">10</a>
//           </div> */}

//     </div >
