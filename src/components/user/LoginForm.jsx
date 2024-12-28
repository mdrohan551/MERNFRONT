// eslint-disable-next-line no-unused-vars
import React from 'react';
import SubmitButton from "./SubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";



const LoginForm = () => {

    let navigate=useNavigate();
 let   {LoginFormValue,LoginFormOnchange,userOTPRequest}=UserStore()
const onFormSubmit=async ()=>{
     if (!ValidationHelper.IsEmail(LoginFormValue.email)){
          toast.error("valid Email Address Required")
     }
   else {
       toast.success("Please chek your email inbox");
       // await userOTPRequest(LoginFormValue.email)
      let res=  await userOTPRequest(LoginFormValue.email);
        res?navigate("/otp"):toast.error("something went wrong not send otp")
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
                        <h4>Enter Your Email</h4>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input onKeyPress={submiteEnter}  placeholder="Email Address" type="email" className="form-control" value={LoginFormValue.email} onChange={(e)=>{LoginFormOnchange("email",e.target.value)}} />
                        <SubmitButton onClick={onFormSubmit}  className="btn mt-3 btn-success" text="Next"   />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;