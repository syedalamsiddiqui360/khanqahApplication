import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash'

function Upper(props) {
  const [category, setCategory] = useState(-1)
  const [categoryList, setCategoryList] = useState([{ id: 0, title: "Select Category" }])
  const [person, setPerson] = useState(-1)
  const [personList, setPersonList] = useState([{ id: 0, title: "Select Name" }])
  const [type, setType] = useState(-1)
  const [typeList, setTypeList] = useState([{ id: 0, title: "Select Type" }])
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getPerson(props.typeId)
    getType(props.typeId)
    getCategory(props.typeId)
  }, [props.typeId])

  useEffect(() => {
    setCategory(props.categoryId)
    setPerson(props.personId)
    setType(props.typeId)
  }, [props.typeId, props.personId, props.categoryId])

  useEffect(() => {
  }, [isUpdate])

  useEffect(() => {
  }, [props.updateUper])

  const getType = (id) => {
    let newList = [];
    axios.post('http://localhost:9000/type/get_by_id', {
      id: id
    })
      .then((res) => {
        let data = res.data;
        // console.log(data);
        data.forEach((item) => {
          newList.push({ id: item.id, title: item.title })
        })
        setTypeList(newList)
        setIsUpdate(!isUpdate)
      }).catch((err) => {
        console.log('FAILURE!!' + err);
      });
  }

  const getCategory = (typeId) => {
    let newList = [{ id: 0, title: "Select Category" }];
    axios.post('http://localhost:9000/category/get_by_type', {
      typeId: typeId,
    })
      .then((res) => {
        let data = res.data;
        // console.log(data);
        data.forEach((item) => {
          newList.push({ id: item.id, title: item.title })
        })
        setCategoryList(newList)
        setIsUpdate(!isUpdate)
      }).catch((err) => {
        console.log('FAILURE!!' + err);
      });
  }

  const getPerson = (id) => {
    let newList = [{ id: 0, title: "Select Person" }];
    axios.post('http://localhost:9000/person/get_by_type', {
      typeId: id
    })
      .then((res) => {
        let data = res.data;
        // console.log(data);
        data.forEach((item) => {
          newList.push({ id: item.id, title: item.title })
        })
        setPersonList(newList)
        setIsUpdate(!isUpdate)
      }).catch((err) => {
        console.log('FAILURE!!' + err);
      });
  }

  const categoryHandle = (value, index) => {
    setCategory(categoryList[index].id)
    props.setData(person, type, categoryList[index].id, "")
  }

  const personHandle = (value, index) => {
    setPerson(personList[index].id)
    props.setData(personList[index].id, type, category, "")
  }

  const typeHandle = (value, index) => {
    setType(typeList[index].id)
  }

  const handleCategoryCross = () => {
    setCategory(0)
    props.setData(person, type, 0, "")
  }

  const handlePersonCross = () => {
    setPerson(0)
    props.setData(0, type, category, "")
  }

  const handleSearchCross = () => {
    setSearchValue("")
    props.setData(person, type, category, "")
  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value)
    callSearchApi(event.target.value)
  }

  const callSearchApi = useCallback(_.debounce((searchValue) => {
    props.setData(0, 0, 0, searchValue)
  }, 1300), []);

  return (
    <div>
      <div class="site-section site-section-sm pt-2 pb-0 ">
        <div class="container">
          <div class="row">
            <form class="form-search col-md-12" >
              <div class="row  align-items-end">
                <div class="col-md-3">
                  <label for="list-types">Name</label>
                  <div class="select-wrap">
                    <span class="icon icon-close2" onClick={handlePersonCross}></span>
                    <select name="offer-types" value={person} onChange={(e) => personHandle(e.target.value, e.target.options.selectedIndex)} id="offer-types" class="form-control d-block rounded-0">
                      {personList.map((item) => {
                        return <option value={item.id}>{item.title}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="select-city">Category</label>
                  <div class="select-wrap">
                    <span class="icon icon-close2" onClick={handleCategoryCross}></span>
                    <select name="list-types" value={category} onChange={(e) => categoryHandle(e.target.value, e.target.options.selectedIndex)} id="list-types" class="form-control d-block rounded-0">
                      {categoryList.map((item) => {
                        return <option value={item.id}>{item.title}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="list-types">Search By Word</label>
                  <div class="select-wrap">
                    <input type="text" class="btn btn-block text-left bg-white" placeholder="Enter here" value={searchValue} onChange={(event) => handleSearchInput(event)} />
                    <span class="icon icon-close2" onClick={handleSearchCross}></span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                <div class="mr-auto">
                  {/* <a href="index.html" class="icon-view view-module active"><span class="icon-view_module"></span></a>
                  <a href="view-list.html" class="icon-view view-list"><span class="icon-view_list"></span></a> */}

                </div>
                <div class="ml-auto d-flex align-items-center">
                  <div>
                    {/* <a href="#" class="view-list px-3 border-right active">All</a> */}
                    <a href="#" class="view-list px-3 border-right">Title</a>
                    <a href="#" class="view-list px-3">Date</a>
                  </div>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select class="form-control form-control-sm d-block rounded-0">
                      <option value="">Sort by</option>
                      <option value="">Ascending</option>
                      <option value="">Descending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Upper;
