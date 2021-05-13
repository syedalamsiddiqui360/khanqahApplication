import React, { useState, useEffect, useRef , useCallback } from 'react';
import RCG from 'react-captcha-generator';

function Captcha(props) {
    const {captchaText, setCaptchaText  ,isUpdate } = props;

    useEffect(()=>{
        console.log("faizan")
    })

    const result =(text)=>{
        setCaptchaText(text);
    }

    return (
            <RCG result={result} />
    );
}

export default Captcha;
