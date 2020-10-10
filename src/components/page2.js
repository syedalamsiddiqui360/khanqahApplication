import React from 'react';


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';



function Page2() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);



    
    const images = [
        "assets/images/img_1.jpg",
        "assets/images/img_1.jpg",
        "assets/images/img_1.jpg",
        "assets/images/img_1.jpg"
    ];

    const imageStyle = (src: string) => ({
        backgroundSize: "cover",
        backgroundImage: `url(${src})`,
        height: "100%",
        width: "100%",
    });
    return (
        <div>

<AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={1000}
    animation="scaleOutAnimation"
  >
       <div data-src="assets/images/person_3.jpg" />
    <div data-src="assets/images/person_3.jpg" />
    <div data-src="assets/images/person_3.jpg" />
  </AutoplaySlider>


          {/* <Slider>
          <img src="assets/images/img_1.jpg" alt="Image" />
          <img src="assets/images/img_1.jpg" alt="Image" />
          <img src="assets/images/img_1.jpg" alt="Image" />
          </Slider> */}

          {/* <Slider hasBullets >
					{images.map((image) => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider> */}

        </div >


    )
}

export default Page2;