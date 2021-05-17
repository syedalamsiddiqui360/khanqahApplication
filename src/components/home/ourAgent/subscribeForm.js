import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function SubscribeForm(props) {
    const {open, setOpen} = props;
    const [isDisable, setIsDisable] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [validEmail , setValidEmail] = useState(false);
    const [message , setMessage] = useState('');
    const [data, setData] = useState({
        'name': '',
        'email': '',
        'phoneNumber': ''
    });
    
    useEffect(()=>{
        if(data.name !== "" && data.email !== "" && data.phoneNumber !== "" ){
            setIsDisable(false)
        }
        else{
          setIsDisable(true)
        }
    },[isUpdate])
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
                setTimeout(() => {
                  handleClose()
              }, 2000)
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
        <div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth='sm'>
            <DialogTitle id="form-dialog-title">Subscribe Through WhatsApp</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe, please enter your information here. We will send updates soon.
              </DialogContentText>
              <TextField autoFocus margin="dense" id="name" label="Full Name" type="text" fullWidth onChange={(e) => handleName(e)} />

              <TextField margin="dense" id="name" label="Email Address" type="email" fullWidth onChange={(e) => handleEmail(e)} error = {validEmail}/>

              <TextField margin="dense" id="name" label="Mobile Number" type="email" fullWidth onChange={(e) => handleNumber(e)} />

              {message !== '' && (
                  <DialogContentText color="secondary">
                      {message}
                </DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={submit} disabled={isDisable} color="primary"> Subscribe </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
}

export default SubscribeForm;
