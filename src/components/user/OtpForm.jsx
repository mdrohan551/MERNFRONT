import React from 'react';
import SubmitButton from "./SubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";
import validationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";

const OtpForm = () => {
    let {OTPFormValue,OTPFormOnchange,VerifyLoginRequest}=UserStore();
    let navigate= useNavigate();
    const onFormSubmit=async ()=>{
        if(validationHelper.IsEmpty(OTPFormValue.otp)){
            toast.error("valid PIN Required")
        }
        else {
            let res = await VerifyLoginRequest(OTPFormValue.otp);
            res?navigate("/"):toast.error("something went wrong")
        }
    }
    // key handle enter button
    const submiteEnter=(event)=>{
        event.key==='Enter' ? onFormSubmit() : null
    }
    return (
        <div className="container section pt-5 pb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email address you provide</p>
                        <input onKeyPress={submiteEnter} placeholder="Verification" type="text" className="form-control" value={OTPFormValue.otp} onChange={(e)=>{OTPFormOnchange("otp",e.target.value)}} />
                        <SubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;