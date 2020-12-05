import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Upper(props) {
  const [category, setCategory] = useState(-1)
  const [categoryInput, setCategoryInput] = useState()
  const [categoryList, setCategoryList] = useState([{ id: -1, title: "Select Category" }])
  const [person, setPerson] = useState(-1)
  const [personInput, setPersonInput] = useState()
  const [personList, setPersonList] = useState([{ id: -1, title: "Select Name" }])
  const [type, setType] = useState(-1)
  const [typeInput, setTypeInput] = useState()
  const [typeList, setTypeList] = useState([{ id: -1, title: "Select Type" }])
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getPerson(props.type)
    getType(props.type)
    getCategory(props.type)
  }, [])

  useEffect(() => {
  }, [isUpdate])

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
    let newList = [{ id: -1, title: "Select Category" }];
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
    axios.post('http://localhost:9000/person/get_by_type', {
      typeId: id
    })
      .then((res) => {
        let data = res.data;
        // console.log(data);
        data.forEach((item) => {
          personList.push({ id: item.id, title: item.title })
        })
        setPersonList(personList)
        setIsUpdate(!isUpdate)
      }).catch((err) => {
        console.log('FAILURE!!' + err);
      });
  }

  const categoryHandle = (value, index) => {
    setCategory(categoryList[index].id)
    setCategoryInput(value)
  }

  const personHandle = (value, index) => {
    setPersonInput(value)
    setPerson(personList[index].id)
  }

  const typeHandle = (value, index) => {
    setTypeInput(value)
    setType(typeList[index].id)
  }

  const search = () => {
    props.setData(person, type, category)
  };


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
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="offer-types" value={personInput} onChange={(e) => personHandle(e.target.value, e.target.options.selectedIndex)} id="offer-types" class="form-control d-block rounded-0">
                      {personList.map((item) => {
                        return <option value={item.id}>{item.title}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="offer-types">Type</label>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="select-city" value={typeInput} onChange={(e) => typeHandle(e.target.value, e.target.options.selectedIndex)} id="select-city" class="form-control d-block rounded-0">
                      {typeList.map((item) => {
                        return <option value={item.id}>{item.title}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="select-city">Category</label>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="list-types" value={categoryInput} onChange={(e) => categoryHandle(e.target.value, e.target.options.selectedIndex)} id="list-types" class="form-control d-block rounded-0">
                      {categoryList.map((item) => {
                        return <option value={item.id}>{item.title}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <input type="button" onClick={search} class="btn btn-success text-white btn-block rounded-0" value="Search" />
                </div>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                <div class="mr-auto">
                  <a href="index.html" class="icon-view view-module active"><span class="icon-view_module"></span></a>
                  <a href="view-list.html" class="icon-view view-list"><span class="icon-view_list"></span></a>

                </div>
                <div class="ml-auto d-flex align-items-center">
                  <div>
                    <a href="#" class="view-list px-3 border-right active">All</a>
                    <a href="#" class="view-list px-3 border-right">Rent</a>
                    <a href="#" class="view-list px-3">Sale</a>
                  </div>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select class="form-control form-control-sm d-block rounded-0">
                      <option value="">Sort by</option>
                      <option value="">Price Ascending</option>
                      <option value="">Price Descending</option>
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
