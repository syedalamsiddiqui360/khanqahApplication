import React, { useState, useEffect } from 'react';

function Lower(props) {
  const [counter, setCounter] = useState(1);
  const [noOfButton, setNoOfButton] = useState(Math.round(props.length / props.itemPerPage));

  useEffect(() => {
    console.log(props.length +" "+ props.itemPerPage)
    let value = props.itemPerPage * counter;
    let start = value - props.itemPerPage;
    console.log(start + " " + value)
    props.setCounter(start, value)
  }, [counter]);

  const clickNext = () => {
    if (counter == noOfButton) {
      setCounter(counter);
    } else {
      setCounter(counter + 1)
    }
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
              <a class="active" onClick={clickPre}>Prev</a>
              {new Array(noOfButton).fill("").map((value, index) => {
                return (
                  <a onClick={() => setCounter(index +1) } class={index + 1 === counter ? "active" : ""} >{index + 1}</a>
                )
              })
              }
              <a class="active" onClick={clickNext}>Next</a>
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
