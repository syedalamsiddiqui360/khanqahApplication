import React from 'react';
import Item from './item';
import SmallSlider from '../smallSlider'

function OurAgent() {
  const data = [
    {
        name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
        description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
        imgSrc: "assets/images/img_1.jpg",
        audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
        date: "Jan 20th, 2019",
        delay: 200
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
    <div>
      <div class="site-section">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-md-7">
              <div class="site-section-title text-center">
                <h2>Our Agents</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div  >
                <SmallSlider data={data} />
              </div>
              <div class="mt-3" >
                <SmallSlider data={data} />
              </div>
            </div>
            <Item />
          </div>
        </div>
      </div>
    </div >

  );
}

export default OurAgent;
