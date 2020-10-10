import React from 'react';
import SmallSlider from '../../smallSlider'

function Item(props) {
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


  return (
    <div class="col-md-6 col-lg-4 mb-3">
      <div class="property-entry bg-light">
        <h2 class="h3 text-center p-3"><a href="#">{props.name}</a></h2>
        <div style={{ width:"100%", height:"100%", paddingBottom:"20%"}}>
        <SmallSlider data={data}       interval={1000} animation={"cubeAnimation"} />

        </div>

        <a class=" service text-center py-3" href="property-details.html" >
          <p class=" read-more" >View More</p>
        </a>
      </div>
    </div>
  )
}

export default Item;