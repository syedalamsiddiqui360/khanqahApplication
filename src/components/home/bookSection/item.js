import React from 'react';
// import SmallSlider from '../../slider/slider';
import SmallSlider from '../../smallSlider'
import { useHistory } from 'react-router-dom';

function Item(props) {
  const history = useHistory();
  const data = [
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "Jan 20th, 2019",
      delay: 200,
    },
    {
      name: "140516_002.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      imgSrc: "assets/images/img_2.jpg",
      audioUrl: "audio/140516_002.MP3",
      date: "Jan 20th, 2019",
      delay: 300

    },
    {
      name: "140603_001.MP3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      audioUrl: "audio/140603_001.MP3",
      imgSrc: "assets/images/img_3.jpg",
      date: "Jan 20th, 2019",
      delay: 400

    }
  ]

  const images = [
    { imgSrc: "http://localhost:9000/pdf/get/2020-12-6 0.892466680649219 IMG-20190430-WA0003.jpg" },
    { imgSrc: "http://localhost:9000/pdf/get/2020-12-6 0.989799525116676 IMG-20190501-WA0009.jpg" },
    { imgSrc: "http://localhost:9000/pdf/get/2020-12-6 0.2098441221425349 IMG-20190422-WA0011.jpg" },
    { imgSrc: "http://localhost:9000/pdf/get/2020-12-6 0.2061731689774542 IMG-20190508-WA0000.jpg" },
    { imgSrc: "http://localhost:9000/pdf/get/2020-12-6 0.1983451551065436 IMG-20190501-WA0007.jpg" }
  ];


  return (
    <div class="col-md-6 col-lg-4 ">
      <div class="property-entry bg-light">
        <h2 class="h3 text-center p-3"><a href="#" >{props.data.name}</a></h2>
        <div style={{ width: "100%", margin: "5% 1% 10% 1%" }}>
          {/* <SmallSlider data={props.data} /> */}
          <SmallSlider data={props.data} interval={props.interval} animation={"foldOutAnimation"} />
        </div>
        <a class=" service text-center py-3" href="#" >
                    <p><span class="read-more" style={{cursor: 'pointer'}} onClick={()=>{history.push(`${props.data.path}`,{ listType: "pdf", categoryId: props.data.categoryId, personId: 0 })}}>View More</span></p>        </a>
      </div>
    </div>
  )
}

export default Item;