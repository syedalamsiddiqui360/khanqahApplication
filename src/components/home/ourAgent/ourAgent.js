import React,{useEffect, useState} from 'react';
import Item from './item';
import SmallSlider from '../../smallSlider'
import axios from 'axios';

function OurAgent(props) {
  const data1 = [
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      fileName: "assets/real_Images/amal-1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "Jan 20th, 2019",
      delay: 200,
      interval: 1000,
      animation: "scaleOutAnimation"
    },
    {
      name: "140516_002.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      fileName: "assets/real_Images/amal-2.jpg",
      audioUrl: "audio/140516_002.MP3",
      date: "Jan 20th, 2019",
      delay: 300,
      interval: 1000,
      animation: "scaleOutAnimation"

    },
    {
      name: "140603_001.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      audioUrl: "audio/140603_001.MP3",
      fileName: "assets/real_Images/amal-3.jpg",
      date: "Jan 20th, 2019",
      delay: 400,
      interval: 1000,
      animation: "scaleOutAnimation"

    },
    {
      name: "140603_001.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      audioUrl: "audio/140603_001.MP3",
      fileName: "assets/real_Images/amal-4.jpg",
      date: "Jan 20th, 2019",
      delay: 400,
      interval: 1000,
      animation: "scaleOutAnimation"

    },
    {
      name: "140603_001.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      audioUrl: "audio/140603_001.MP3",
      fileName: "assets/real_Images/amal-5.jpg",
      date: "Jan 20th, 2019",
      delay: 400,
      interval: 1000,
      animation: "scaleOutAnimation"

    },
  ]
  const [data, setData] = useState([]);

  useEffect(() => {
    callApi();
  }, [])

  useEffect(()=>{

  },data)
  const callApi = () => {
    let data = [];
    axios.post('http://localhost:9000/images/get_by_slider_id', {
      limit: 5,
      sliderId: 2
    })
      .then((res) => {
        data = res.data;
        setData(data)
      }).catch((err) => {
        console.log('FAILURE!!' + err);
      });
  }

  return (
    <div>
      <div class="site-section">
        <div class="container">
          {/* <div class="row mb-0 justify-content-center">
            <div class="col-md-7">
              <div class="site-section-title text-center">
                <h2>Our Agents</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
              </div>
            </div>
          </div> */}
          <div class="row">
            <div class="col-lg-4 " data-aos="fade-right" data-aos-delay="600">

              <div class="pb-5">
                <SmallSlider data={data} interval={900} animation={"foldOutAnimation"} />
              </div>

              <div class="pb-5">
                <SmallSlider data={data} interval={2000} animation={"fallAnimation"} />
              </div>
              {/* <div class="p-4 bg-white">
                <span class="d-block text-secondary small text-uppercase">{props.date}</span>
                <h2 class="h5 text-black mb-3"><a href="#">Name</a></h2>
                <p>{props.description}</p>
              </div> */}
            </div>

            <Item />
          </div>
        </div>
      </div>
    </div >

  );
}

export default OurAgent;
