import React from 'react';
import Player from "./player";



function About() {
const [pauseStatus, setPauseStatus] = React.useState("none");
const [playStatus, setPlayStatus] = React.useState("block");
const [current, setStatus] = React.useState(true);
const audio = new Audio("audio/mohorrm.mp3");

    const url = "audio/mohorrm.mp3"
    const image = "assets/images/person_3.jpg"
    
    
    function play(){
        if(current){
            audio.play();
            setPlayStatus("none")
            setPauseStatus("block")
            setStatus(false);  
        }
        else{
            audio.pause();
            setPauseStatus("none")  
            setPlayStatus("block")
        }
       // alert();
    }
    
    function pause(){
      
       // alert();
    }



    return (
        <div>
            {/* <audio controls>
                <source src={url} type="audio/mpeg" />
            </audio>
            <Player url={url} image={image} /> 
            
                <button iconClass="fa fa-key fa-fw">FontAwsome icon</button>
            <button onClick={play}>
                <img src={"assets/icon/play-button.png"}/>
            </button>
            
            */}

<div id="wrapper">
      <div class="play-wrapper">
        <svg
          version="1.1"
          id="play"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          height="3%"
          width="3%"
          viewBox="0 0 512 512"
          style={{display:playStatus}}
          onClick={play}
        >
          <g>
            <g>
              <g>
                <path
                  d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
                  C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
                  z"
                />
                <path
                  d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
                  c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
                  c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z"
                />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>

        <svg
          viewBox="0 0 480 480"
          id="pause"
          class="icon"
          height="3%"
          width="3%"
          style={{display: pauseStatus}}
          xmlns="http://www.w3.org/2000/svg"
          onClick={play}
        >
          <path
            d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0"
          />
          <path
            d="m200 128c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8zm0 0"
          />
          <path
            d="m280 128c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8zm0 0"
          />
        </svg>

        <div class="audio-detail">
          <div class="duration-wrapper">
            <div class="duration-timeline"></div>
          </div>
          <div class="audio-info">
            <div class="time"></div>
            <input type="range" class="range" min="0" max="1" step="0.1" />
            <div class="loop">ON</div>
          </div>
        </div>
      </div>
    </div>
 


        </div >

    );
}

export default About;


