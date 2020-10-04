import React from 'react';

function SmallSlider(props) {
    return (
        <div>
         <div class="slide-one-item home-slider owl-carousel">
         {
                        props.data.map((value)=>{
                            return(
                                <img src={value.imgSrc} alt="Image" class="img-fluid" />
                            )
                        })
                    }
                 </div>
             
        </div >

    )
}

export default SmallSlider;