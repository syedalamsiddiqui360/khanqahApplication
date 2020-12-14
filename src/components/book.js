import React, {  useState, useEffect, useReducer  } from 'react';
import AskQuestion from './askQuestion'
import Upper from './list/upper';
import DetailList from './list/detailList';
import Lower from './list/lower';
import SmallSlider from './smallSlider';
import Item from './recentPost/recentItem'
import axios from 'axios';
import List from './list/list';


const myReducer = (state, action) => {
  switch (action.type) {
      case "chunks":
          return { off: state.off + 6 };
      case "isNewUrl":
          return { isNewUrl: true, off: 0 };
      default:
          throw new Error();
  }
};

function Book() {

  const [state, dispatch] = useReducer(myReducer, {
    off: 0,
    isNewUrl: false,
});

const [data, setData] = useState([]);
const [size, setSize] = useState(0);
const [listType, setListType] = useState("pdf");
const [offset, setOffset] = useState(1);
const [categoryId, setCategoryId] = useState(0);
const [typeId, setTypeId] = useState(4);
const [personId, setPersonId] = useState(0);
const [url, setUrl] = useState("get_all_by_type");
const [noOfItem, setNoOFItem] = useState(6);
const [isUpdate, setIsUpdate] = useState(false);
const [updateLower, setUpdateLower] = useState(false);

useEffect(() => {
    getpdf();
}, [url, categoryId, personId, state])

useEffect(() => {
    console.log("use effect2")
}, [isUpdate])

const getpdf = () => {
    let newList = [];
    axios.post('http://localhost:9000/pdf/' + url, {
        categoryId: categoryId,
        typeId: typeId,
        personId: personId,
        offset: state.off,
        limit: noOfItem
    }).then((res) => {
        let data1 = res.data.data;
        let length = res.data.length
        console.log(data1);
        console.log(data);
        // console.log(length);
        if (!state.isNewUrl) {
            data1.forEach((item) => {
                data.push({ ...item })
            })
            setData(data)
        } else {
            data1.forEach((item) => {
                newList.push({ ...item })
            })
            setData(newList)
            setUpdateLower(!updateLower)
        }
        setSize(length)
        setIsUpdate(!isUpdate)
    }).catch((err) => {
        console.log('FAILURE!!' + err);
    });
}

const callChunks = (chunks) => {
    dispatch({ type: 'chunks' })
    setOffset(offset + 1)
}

const callData = (person, type, category) => {
    setOffset(0)
    setData([])
    setCategoryId(category)
    setPersonId(person)
    setIsUpdate(!isUpdate)

    category != -1 && person != -1 ? callApi("get_all_by_type_person_category") :
        category != -1 ? callApi("get_all_by_category") :
            person != -1 ? callApi("get_all_by_type_person") :
                callApi("get_all_by_type", 0, 0);
}

const click = (start, end) => {
  // console.log(start + " " + end)
  // setStart(start)
  // setEnd(end)
};

const callApi = (url) => {
    setUrl(url)
    dispatch({ type: 'isNewUrl' })
}


  return (

    <div>
    <List listType={listType} data={data} updateLower={updateLower} type={typeId} noOfItem={noOfItem} size={size} callChunks={callChunks} callData={callData} />
</div>
    // <div>
    //   <div class="site-section site-section-sm">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-lg-8">
    //           <div >
    //             <Upper list={data} type={typeId} setData={callData} />
    //             <div class="site-section site-section-sm bg-light">
    //               <div class="container">
    //                 <DetailList list={data} start={0} end={6} />
    //                 <Lower length={size} updateLower={updateLower} itemPerPage={noOfItem} start={0} end={6} setData={click} setChunks={callChunks} />
    //               </div>
    //             </div>
    //           </div>

    //         </div>

    //         <div class="col-lg-4">

    //           <div class="bg-white widget border rounded">

    //             <h3 class="h4 text-black widget-title mb-3">Contact Agent</h3>
    //             <form action="" class="form-contact-agent">
    //               <div class="form-group">
    //                 <label for="name">Name</label>
    //                 <input type="text" id="name" class="form-control" />
    //               </div>
    //               <div class="form-group">
    //                 <label for="email">Email</label>
    //                 <input type="email" id="email" class="form-control" />
    //               </div>
    //               <div class="form-group">
    //                 <label for="phone">Phone</label>
    //                 <input type="text" id="phone" class="form-control" />
    //               </div>
    //               <div class="form-group">
    //                 <input type="submit" id="phone" class="btn btn-primary" value="Send Message" />
    //               </div>
    //             </form>

    //           </div>

    //           <div class="bg-white widget border rounded">
    //             <div data-aos="fade-left" data-aos-delay="400">
    //             <h2 class="h5 text-black mb-3"><a href="#">'{dataa[1].name}'</a></h2>
    //             <SmallSlider data={dataa} interval={1000} animation={"openAnimation"} />

    //             </div>
    //           </div>

    //           <div class="bg-white widget border rounded">
    //             <div data-aos="fade-left" data-aos-delay="600">
    //             <h2 class="h5 text-black mb-3"><a href="#">{dataa[1].name}</a></h2>

    //             <SmallSlider data={dataa} interval={2000} animation={"foldOutAnimation"} />

    //             </div>
    //           </div>

    //         </div>

    //       </div>
    //     </div>
    //   </div>
    //   <AskQuestion />
    // </div>
  );
}

export default Book;
