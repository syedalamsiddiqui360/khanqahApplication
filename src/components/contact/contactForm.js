import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
    const [data, setData] = useState({
        'name': '',
        'email': '',
        'phoneNumber': ''
    });

    // useEffect(()=>{},[data])

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
        console.log(data)
        axios.post('http://localhost:9000/follower/add_whatsapp_no', data)
        .then((res) => {
            // data = res.data;
            console.log(res)
        }).catch((err) => {
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
                        <label class="font-weight-bold" for="email">Mobile Number</label>
                        <input type="text" required id="mobile_number" onChange={(e) => handleNumber(e)} class="form-control" placeholder="Mobile Number" />
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-12">
                        <button onClick={submit} class="btn btn-primary  py-2 px-4 rounded-0"> Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
