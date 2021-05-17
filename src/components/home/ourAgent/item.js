import React, {useState , useEffect} from 'react';
import Audio from '../../list/audio';
import "./ourAgent.scss";
import Subscribe from './subscribeForm';

function Item() {
    const [date, setData] = useState(new Date());
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            console.log(new Date())
            setData(new Date())
        }, 1000)
    },[date])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div class="col-md-12 col-lg-8">
            <div class="team-member">

                <div class="row ">
                    <div class="col-md-6 col-lg-6 property-entry bg-light" data-aos="fade-down" data-aos-delay="500">
                        {/* <div class="img-fluid rounded mb-4"
                        style={{ background: 'url(assets/images/hero_bg_1.jpg)' }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center text-center">
                            <div class="col-md-10">
                                <span class="d-inline-block bg-danger text-white px-3 mb-0 property-offer-type rounded">For Sale</span>
                                <h1 class="mb-0">625 S. Berendo St</h1>
                                <p class="mb-0"><strong class="h2 text-success font-weight-bold">$1,000,500</strong></p>
                                <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
                            </div>
                            </div>
                        </div>
                        </div> */}
                        <img src="assets/images/bg_design_1.jpg" alt="Image" class="img-fluid rounded mb-2 mt-2 " />
                        {/* <div class="container"> */}
                            {/* <div class="row align-items-center justify-content-center text-center"> */}
                            <div className="ourAgent-time-container">
                                {/* <span class="d-inline-block bg-danger text-white px-3 mb-0 property-offer-type rounded">For Sale</span> */}
                                {/* <h7 class="mb-0">625 S. Berendo St</h7> */}
                                <h3 class="text-black" ><strong >Pakistan Time</strong></h3>
                                <p class="btn btn-white btn-outline-white py-3 px-3 rounded-0 btn-2">{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0'+date.getSeconds(): date.getSeconds()}`}</p>
                            </div>
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div class="col-md-6 col-lg-6 property-entry bg-light " data-aos="fade-down" data-aos-delay="600">

                        <img src="assets/images/bg_design_1.jpg" alt="Image" class="img-fluid rounded mb-4 mt-2" />
                        <div className="ourAgent-time-container">
                                {/* <span class="d-inline-block bg-danger text-white px-3 mb-0 property-offer-type rounded">For Sale</span> */}
                                {/* <h7 class="mb-0">625 S. Berendo St</h7> */}
                                <h3 class="text-black" ><strong >Get Latest update</strong></h3>
                                <p class="btn btn-white btn-outline-white py-3 px-3 rounded-0 btn-2" onClick={handleClickOpen}>click here</p>
                        </div>
                    
                    </div>
                </div>

                <h2 class="font-weight-light text-black h4">Megan Smith</h2>
                {/* <span class="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!</p>
                    <p>
                        <a href="#" class="text-black p-2"><span class="icon-facebook"></span></a>
                        <a href="#" class="text-black p-2"><span class="icon-twitter"></span></a>
                        <a href="#" class="text-black p-2"><span class="icon-linkedin"></span></a>
                    </p> */}
                <div data-aos="fade-left" data-aos-delay="900">


                    <Audio audioUrl={"audio/16 Sunday 24-04-2011 - Ashaar (after bayan).mp3"} />
                </div>
            </div>
            <Subscribe open={open} setOpen={setOpen} />
        </div>
    )
}

export default Item;