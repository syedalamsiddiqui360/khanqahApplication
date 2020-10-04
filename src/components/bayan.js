import React, {useEffect} from 'react';
import Upper from './list/upper'
import Item from './recentPost/recentItem';
import Lower from './list/lower';
import List from './list/list';


function Bayan() {
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

    },
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

  useEffect(()=>{
    get(); 
 },[])

const  get = () =>{
console.log("api")
 }


  return (
    <div>
    {/*   <Upper />
       <div class="site-section">
        <div class="container">
          <div class="row">
            {
              data.map((value, index) => {
                return (
                  <Item delay={value.delay} name={value.name} audioUrl={value.audioUrl} description={value.description} imgSrc={value.imgSrc} date={value.date} />
                )
              })
            }
          </div>
          <div data-aos="fade-up">
            <Lower />
          </div>
        </div>
      </div> */}
      <List  />
    </div >

  );
}

export default Bayan;