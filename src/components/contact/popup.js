import React, { useState, useEffect, useRef , useCallback } from 'react';
import Captcha from './captcha';
import axios from 'axios';

function Popup(props) {

    const [data, setData] = useState({
        'name': '',
        'email': '',
        'phoneNumber': ''
    });
    const [captchaText , setCaptchaText] = useState('');
    const [captchaValue , setCaptchaValue] = useState('');
    const [captchaMessage , setCaptchaMessage] = useState('');
    const [isUpdate , setIsUpdate] = useState(false);

    useEffect(()=>{
        console.log("faizan")
    },[isUpdate])

    const handleName = (e) => {
        data.name = e.target.value;
    }

    const handleEmail = (e) => {
        data.email = e.target.value;
    }

    const handleNumber = (e) => {
        data.phoneNumber = e.target.value;
    }

    const submit = () => {
        var x = document.getElementById("exampleModalScrollable");
        x.close();                    
        // console.log(captchaValue)
        // if(data.name !== "" && data.email !== "" && data.phoneNumber !== "" && captchaValue !== ""){
        //     if(captchaValue === captchaText){
        //         axios.post('http://localhost:9000/follower/add_whatsapp_no', data)
        //         .then((res) => {
        //             // data = res.data;
        //             console.log(res)
        //             // return (<div data-dismiss="modal"> faizan</div>)
        //         }).catch((err) => {
        //             console.log('FAILURE!!' + err);
        //         });
        //     }
        //     else{
        //         setCaptchaMessage('captcha text not match')
        //         setIsUpdate(!isUpdate);
        //     }
        // }
        // else{
        // console.log("data")
        // }
    }


    const handleCaptcha = (e) =>{
        setCaptchaValue(e.target.value);
    }


    return (
        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="p-5 bg-white border">
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="font-weight-bold" for="fullname">Full Name</label>
                                <input type="text" required id="fullname" onChange={(e) => handleName(e)} class="form-control" placeholder="Full Name" />
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="font-weight-bold" for="email">Email</label>
                                <input type="email" required id="email" onChange={(e) => handleEmail(e)} class="form-control" placeholder="Email Address" />
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="font-weight-bold" for="email">Mobile Number</label>
                                <input type="text" required id="mobile_number" onChange={(e) => handleNumber(e)} class="form-control" placeholder="Mobile Number" />
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <div>
                                    <Captcha captchaText={captchaText} setCaptchaText={setCaptchaText} isUpdate={isUpdate}/>
                                </div>
                                <input class="form-control" type='text' required  onChange={(e) => handleCaptcha(e)} placeholder="Enter Captcha" />           
                            </div>
                        </div>
                        {captchaMessage !== '' && (
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="font-weight-bold text-danger" for="email">{captchaMessage}</label>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onClick={submit} class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
