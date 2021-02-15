import React, { useState, useCallback, useEffect } from 'react';
import './slider.scss';

function Slider(props) {
    const imageData = [
        { imgSrc: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        { imgSrc: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" },
        { imgSrc: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
        { imgSrc: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
        { imgSrc: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }
    ];
    const [move, setMove] = useState(0);
    const [images, setImages] = useState([])
    const url = "http://localhost:9000/pdf/get/";

    useEffect(() => {
        setImages(props.data)
    }, [props.data])

    useEffect(() => {
        setTimeout(() => {
            move == images.length - 3 ? setMove(0) : setMove(move + 1)
        }, 2500)
    }, [move])

    const forword = () => {
        move == images.length - 3 ? setMove(0) : setMove(move + 1)
    }

    return (
        <div className="slider">
            <div className="slider-back" onClick={() => { move === 0 ? setMove(images.length - 1) : setMove(move - 1) }}>
                <span className="icon-arrow_back"></span>
            </div>
            <div className="slider-forword" onClick={forword}>
                <span className="icon-arrow_forward"></span>
            </div>
            {
                images.map((value, index) => {
                    return (console.log(value),
                        <div className={index === move ? "slider-inner-inactive" : "slider-inner-active"} key={index} >
                            {index === move && (
                                <img src={url + value.fileName} className="slider-inner" />
                            )}
                        </div >
                    )
                })
            }
        </div >
    )
}

export default Slider;