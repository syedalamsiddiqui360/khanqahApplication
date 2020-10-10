import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function SmallSlider(props) {
    const [interval, setInterval] = useState(1000);
    const [animation, setAnimation] = useState("scaleOutAnimation");

    const AutoplaySlider = withAutoplay(AwesomeSlider);

   useEffect  (()=>{
       console.log("useEffect")
       setVariable()
    }, [])

const setVariable=()=>{
    if(props.animation!=null){
        setAnimation(props.animation)
    }
    if(props.interval!=null){
        setInterval(props.interval)
    }
}

    return (
        <div>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={interval}
                animation={animation}
            >
                {
                    props.data.map((value) => {
                        return (

                            <div data-src={value.imgSrc} />
                        )
                    })


                }
            </AutoplaySlider>


        </div >

    )
}

export default SmallSlider;