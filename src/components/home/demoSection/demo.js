import React, { useState, useEffect } from 'react';
import Item from './demoItem';
import axios from 'axios';

function RecentBlog() {

  const data1 = [
    {
      name: "Ashar",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "Jan 20th, 2019",
      delay: 200
    },
    {
      name: "Bayan",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      imgSrc: "assets/images/img_2.jpg",
      audioUrl: "audio/140516_002.MP3",
      date: "Jan 20th, 2019",
      delay: 300

    },
    {
      name: "Zikar",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      audioUrl: "audio/140603_001.MP3",
      imgSrc: "assets/images/img_3.jpg",
      date: "Jan 20th, 2019",
      delay: 400

    }
  ]
  const [data, setData] = useState([])
  const [set1, setSet1] = useState([])
  const [set2, setSet2] = useState([])
  const [set3, setSet3] = useState([])

  useEffect(() => {
    for (let i = 1; i <= 3; i++)
      getAshar(i);
  }, [])

  useEffect(() => {
    let temp = []
    temp.push(set1)
    temp.push(set2)
    temp.push(set3)

    setData(temp)
  }, [set3, set1, set2])


  const getAshar = (typeId) => {
    axios.post('http://localhost:9000/audio/get_by_type', {
      typeId: typeId,
      limit: 3,
    }).then((res) => {
      let data = res.data;
      switch (typeId) {
        case 1:
          data.name = "Ashar"
          data.path = "/ashar"
          setSet1(data)
          break;
        case 2:
          data.name = "Bayan"
          data.path = "/bayan"
          setSet2(data)
          break;
        case 3:
          data.name = "Zikar"
          data.path = "/zikar"
          setSet3(data)
          break;
      }
    }).catch((err) => {
      console.log('FAILURE!!' + err);
    });
  }

  return (
    <div>

      <div class="site-section bg-light">
        <div class="container">
          <div class="row">
            {data.map((value, index) => {
              return (
                <Item delay={value.delay} path={value.path} name={value.name} data={value} />
              )
            })}
          </div>
        </div>
      </div>
    </div >

  );
}

export default RecentBlog;
