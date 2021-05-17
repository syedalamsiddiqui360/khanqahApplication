import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contact.scss';

function ContactForm() {
    const [isDisable, setIsDisable] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [validEmail , setValidEmail] = useState(false);
    const [message , setMessage] = useState('sdsds');
    const [data, setData] = useState({
        'name': '',
        'email': '',
        'islahiTaluq': '',
        'question': ''
    });
    const reg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    useEffect(()=>{
        if(data.name !== "" && reg.test(data.email) && data.phoneNumber !== "" ){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
   },[isUpdate])

    const handleName = (e) => {
        data.name = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const handleEmail = (e) => {
        data.email = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const handleNumber = (e) => {
        data.phoneNumber = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const submit = () => {
        const reg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        if(reg.test(data.email)){
            setValidEmail(false);
        axios.post('http://localhost:9000/follower/add_whatsapp_no', data)
        .then((res) => {
            // data = res.data;
            console.log(res)
            setMessage("Thank you")
        }).catch((err) => {
            setMessage("Something went wrong")
            console.log('FAILURE!!' + err);
        });
    }
    else{
        setValidEmail(true);
    }
    }

    return (
        <div class="col-md-12 col-lg-8 mb-5">
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
                        <label class="font-weight-bold" for="">Current Islahi talluk</label>
                        <input type="text" required onChange={(e) => handleNumber(e)} class="form-control" placeholder="Islahi talluk" />
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-12">
                        <label class="font-weight-bold" for="">Question</label>
                        <input type="text" required onChange={(e) => handleNumber(e)} class="form-control" placeholder="Question" />
                    </div>
                </div>
                {message !== '' && (
                    <div class="row form-group">
                        <div class="col-md-12">
                            <label class="contact-color-red">{message}</label>
                        </div>
                    </div>
                )}
                <div class="row form-group">
                    <div class="col-md-12">
                        <button onClick={submit} disabled={isDisable} class="btn btn-primary  py-2 px-4 rounded-0"> Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
