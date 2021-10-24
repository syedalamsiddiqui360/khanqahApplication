import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contact.scss';

function ContactForm() {
    const [isDisable, setIsDisable] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [validEmail , setValidEmail] = useState(false);
    const [message , setMessage] = useState('');
    const [data, setData] = useState({
        'name': '',
        'email': '',
        'gender_id': '0',
        'islahiTaluq': '',
        'question': ''
    });
    const [genderList, setGenderList] = useState([
        {
            'id': 1,
            'title': "Male",
        },
        {
            'id': 2,
            'title': "Female",
        }
    ]);
    const reg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    useEffect(()=>{
        if(data.name !== "" && reg.test(data.email) && data.gender_id !== '0' && data.islahiTaluq !== "" && data.question !== "" ){
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

    const handleGender = (e) => {
        data.gender_id = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const handleIslahiTaluq = (e) => {
        data.islahiTaluq = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const handleQuestion = (e) => {
        data.question = e.target.value;
        setIsUpdate(!isUpdate);
    }

    const submit = () => {
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
                        <label class="font-weight-bold" for="email">Gender</label>
                        <select class="form-control" onChange={(e) => handleGender(e)}>
                            <option value="0">Select Gender</option>
                            {
                                genderList.map(element => {
                                    return <option value={element.id}>{element.title}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-12">
                        <label class="font-weight-bold" for="">Current Islahi talluk</label>
                        <input type="text" required onChange={(e) => handleIslahiTaluq(e)} class="form-control" placeholder="Islahi talluk" />
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-12">
                        <label class="font-weight-bold" for="">Question</label>
                        <input type="text" required onChange={(e) => handleQuestion(e)} class="form-control" placeholder="Question" />
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
