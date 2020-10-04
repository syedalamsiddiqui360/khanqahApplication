import React, { useState } from 'react';
import AskQuestion from './askQuestion'
import Upper from './list/upper';
import DetailList from './list/detailList';
import Lower from './list/lower';
import SmallSlider from './smallSlider';

function Book() {
  const data = [
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      tag2CN: "",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "13-8-2019",
    },
    {
      name: "140516_002.MP3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_2.jpg",
      audioUrl: "audio/140516_002.MP3",

      date: "13-8-2019",
    },
    {
      name: "140603_001.MP3",
      price: '20-2-2020',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/140603_001.MP3",
      imgSrc: "assets/images/img_3.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "Rent",
      tag1CN: "offer-type bg-info",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      imgSrc: "assets/images/img_4.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, hay lamhaat gaflat-e-dil k.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      audioUrl: "audio/Ashar, hay lamhaat gaflat-e-dil k.mp3",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_5.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      audioUrl: "audio/Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      tag2CN: "",
      imgSrc: "assets/images/img_6.jpg",
      date: "13-8-2019",
    },
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      tag2CN: "",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "13-8-2019",
    },
    {
      name: "140516_002.MP3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_2.jpg",
      audioUrl: "audio/140516_002.MP3",

      date: "13-8-2019",
    },
    {
      name: "140603_001.MP3",
      price: '20-2-2020',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/140603_001.MP3",
      imgSrc: "assets/images/img_3.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "Rent",
      tag1CN: "offer-type bg-info",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      imgSrc: "assets/images/img_4.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, hay lamhaat gaflat-e-dil k.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      audioUrl: "audio/Ashar, hay lamhaat gaflat-e-dil k.mp3",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_5.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      audioUrl: "audio/Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      tag2CN: "",
      imgSrc: "assets/images/img_6.jpg",
      date: "13-8-2019",
    }
  ]

  const item = [
    {
      name: "16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      tag2CN: "",
      imgSrc: "assets/images/img_1.jpg",
      audioUrl: "audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3",
      date: "13-8-2019",
    },
    {
      name: "140516_002.MP3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_2.jpg",
      audioUrl: "audio/140516_002.MP3",
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      date: "13-8-2019",
    },
    {
      name: "140603_001.MP3",
      price: '20-2-2020',
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/140603_001.MP3",
      imgSrc: "assets/images/img_3.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      tag1: "Lease",
      tag2: "Rent",
      tag1CN: "offer-type bg-info",
      tag2CN: "offer-type bg-success",
      audioUrl: "audio/Ashar, Aahoo naloon sy mit gae zolomaat.mp3",
      imgSrc: "assets/images/img_4.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, hay lamhaat gaflat-e-dil k.mp3",
      price: '2,265,500',
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      tag1: "sale",
      tag2: "Rent",
      audioUrl: "audio/Ashar, hay lamhaat gaflat-e-dil k.mp3",
      tag1CN: "offer-type bg-danger",
      tag2CN: "offer-type bg-success",
      imgSrc: "assets/images/img_5.jpg",
      date: "13-8-2019",
    },
    {
      name: "Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      price: '2,265,500',
      description: "625 S. Berendo St Unit 607 Los Angeles, CA 90005 ",
      detailDescription: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      tag1: "Lease",
      tag2: "",
      tag1CN: "offer-type bg-info",
      audioUrl: "audio/Ashar, kl khoon-e-shahadat m lithra yae jism unhy dikh laingy.mp3",
      tag2CN: "",
      imgSrc: "assets/images/img_6.jpg",
      date: "13-8-2019",
    }
  ]

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [sata, setsata] = useState([]);

  const click = (start, end) => {
    setStart(start)
    setEnd(end)
  };

  const setItem = (data) => {
    setsata(data)
  };


  return (
    <div>
      <div class="site-section site-section-sm">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div >
                <Upper list={data} setData={setItem} />
                <div class="site-section site-section-sm bg-light">
                  <div class="container">
                    <DetailList list={data} start={start} end={end} />
                    <Lower length={data.length} itemPerPage={4} start={start} end={end} setCounter={click} />
                  </div>
                </div>
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
                <h3 class="h4 text-black widget-title mb-3">Other Books</h3>
                <SmallSlider  data={data} />
              </div>

              <div class="bg-white widget border rounded">
                <h3 class="h4 text-black widget-title mb-3">Other Books</h3>
                <SmallSlider  data={data} />
              </div>

            </div>

          </div>
        </div>
      </div>
      <AskQuestion />
    </div>
  );
}

export default Book;
