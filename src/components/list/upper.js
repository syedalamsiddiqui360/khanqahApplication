import React, { useState, useEffect } from 'react';

function Upper(props) {
  const [category, setCategory] = useState("Bayan")
  const [speaker, setSpeaker] = useState("Molana Abid Shah Sb Db")
  const [type, setType] = useState("Recent")

  const categoryItem = [
    {
      id: 1,
      value: "Ashar"
    },
    {
      id: 2,
      value: "Bayan"
    },
    {
      id: 3,
      value: "Zikar"
    }
  ]

  const speakerItem = [
    {
      id: 1,
      value: "Molana Abid Shah Sb Db"
    },
    {
      id: 2,
      value: "Sufi Shameem Sb Db"
    }
  ]

  const typeItem = [
    {
      id: 1,
      value: "Important"
    },
    {
      id: 2,
      value: "Asfaar"
    },
    {
      id: 3,
      value: "Majlis"
    },
    {
      id: 4,
      value: "Short"
    }
  ]

  const categoryHandle = (e) => {
    setCategory(e.target.value)
  }

  const speakerHandle = (e) => {
    setSpeaker(e.target.value)
  }

  const typeHandle = (e) => {
    setType(e.target.value)
  }



  const getData = () => {
    console.log('Hello')
  };


  return (
    <div>

      <div class="site-section site-section-sm pt-2 pb-0 ">
        <div class="container">
          <div class="row">
            <form class="form-search col-md-12" >
              <div class="row  align-items-end">
                <div class="col-md-3">
                  <label for="list-types">Category</label>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="list-types" value={category} onChange={categoryHandle} id="list-types" class="form-control d-block rounded-0">
                      {categoryItem.map((item) => {
                        return <option value={item.id}>{item.value}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="offer-types">Aawaz</label>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="offer-types" value={speaker} onChange={speakerHandle} id="offer-types" class="form-control d-block rounded-0">
                      {speakerItem.map((item) => {
                        return <option value={item.id}>{item.value}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="select-city">Select City</label>
                  <div class="select-wrap">
                    <span class="icon icon-arrow_drop_down"></span>
                    <select name="select-city" value={type} onChange={typeHandle} id="select-city" class="form-control d-block rounded-0">
                      {typeItem.map((item) => {
                        return <option value={item.id}>{item.value}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <input class="btn btn-success text-white btn-block rounded-0" value="Search" />
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
