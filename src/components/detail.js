import React, { useState , useEffect } from 'react';
import SmallSlider from './smallSlider'
import RelatedPost from './relatedPost';
import axios from "axios";
import Audio from './list/audio'


const Detail = () => {

  //const [file, setFile] = useState("");

   const [aud , setAud] = useState("");


  const data = [
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "http://localhost:9000/bayan/get/140516_002.MP3",
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

  useEffect(() => {
  click();
  },[]);

  const click = (e) => {
    console.log("click")
    const fileName= "140704_003.MP3";
    const folder = "bayanaat";
    const url= "http://localhost:9000/audio/get/"+fileName;
    setAud(url)

    // axios.post("http://localhost:9000/bayan/get", body)
    //   .then((response) => {
    //     let data = response.data
    //     console.log(data)
    //     // var myBlob = new Blob([data], { type: 'audio/mp3' });
    //     // let url = window.URL.createObjectURL(myBlob);
    //     // let a = document.createElement('a');
    //     // a.href = url;
    //     //a.setAttribute('download', 'file.mp3'); //or any other extension
    //     // a.download = 'file.mp3';
    //     // document.body.appendChild(a);
    //     // a.click();
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  };

  return (
    <div>

      <div class="site-section site-section-sm">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div>
                <SmallSlider data={data} />
              </div>
              <div class="bg-white property-body border-bottom border-left border-right">
                <div class="row mb-5">
                  <div class="col-md-6">
                    <strong onClick={click} class="text-success h1 mb-3">$1,000,500</strong>
                  </div>
                  <div class="col-md-6">
                    <ul class="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">7,000</span>

                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">Home Type</span>
                    <strong class="d-block">Condo</strong>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">Year Built</span>
                    <strong class="d-block">2018</strong>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">Price/Sqft</span>
                    <strong class="d-block">$520</strong>
                  </div>
                </div>
                <h2 class="h4 text-black">More Info</h2>
                <Audio audioUrl={aud} />
                <Audio audioUrl={data[1].audioUrl} />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aperiam perferendis deleniti vitae asperiores accusamus tempora facilis sapiente, quas! Quos asperiores alias fugiat sunt tempora molestias quo deserunt similique sequi.</p>
                <p>Nisi voluptatum error ipsum repudiandae, autem deleniti, velit dolorem enim quaerat rerum incidunt sed, qui ducimus! Tempora architecto non, eligendi vitae dolorem laudantium dolore blanditiis assumenda in eos hic unde.</p>
                <p>Voluptatum debitis cupiditate vero tempora error fugit aspernatur sint veniam laboriosam eaque eum, et hic odio quibusdam molestias corporis dicta! Beatae id magni, laudantium nulla iure ea sunt aliquam. A.</p>


              </div>

            </div>

            <div class="col-lg-4">

              <div class="bg-white widget border rounded">

                <h3 class="h4 text-black widget-title mb-3">Contact Agent</h3>
                <form action="" class="form-contact-agent">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" class="form-control" />
                  </div>
                  <div class="form-group">
                    <input type="submit" id="phone" class="btn btn-primary" value="Send Message" />
                  </div>
                </form>
              </div>

              <div class="bg-white widget border rounded">
                <h3 class="h4 text-black widget-title mb-3">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit qui explicabo, libero nam, saepe eligendi. Molestias maiores illum error rerum. Exercitationem ullam saepe, minus, reiciendis ducimus quis. Illo, quisquam, veritatis.</p>
              </div>

            </div>

          </div>
        </div>
      </div>

      <RelatedPost />
    </div>

  );
}

export default Detail;