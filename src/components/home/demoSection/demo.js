import React from 'react';
import Item from './demoItem';

function RecentBlog() {

  const data = [
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

  return (
    <div>

      <div class="site-section bg-light">
        <div class="container">
          {/* <div class="row justify-content-center ">
            <div class="col-md-7 text-center">
              <div class="site-section-title">
                <h2>Recent Post</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div> */}

          <div class="row">

            {
              data.map((value, index) => {
                return (

                  <Item delay={value.delay} name={value.name} audioUrl={value.audioUrl} description={value.description} imgSrc={value.imgSrc} date={value.date} />

                )
              })
            }



          </div>

        </div>
      </div>



    </div >

  );
}

export default RecentBlog;
