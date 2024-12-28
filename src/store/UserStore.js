import create  from "zustand";
import axios from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/Utility.js";
import cookie from "js-cookie"

const UserStore= create((set)=>({
     // form managing state manage
    LoginFormValue:{email:""},
    // onchange form method
     LoginFormOnchange:(name,value)=>{
       set((state)=>({
           LoginFormValue:{
               ...state.LoginFormValue,
               [name]:value
           }
       }))
     },

    isFormSubmit:false,
    userOTPRequest:async (email)=>{
        set({isFormSubmit:true});
        let res=await axios.get(`/api/v1/UserOTP/${email}`);
        setEmail(email)
        set({isFormSubmit:false});
        if(res.data['status']=== "success"){
            return true
        }
        else {
            return false
        }
    },
    // email otp sent end
    OTPFormValue:{otp:""},
    OTPFormOnchange:(name,value)=>{
        set((state)=>({
            OTPFormValue:{
                ...state.OTPFormValue,
                [name]:value
            }

        }))
    },
    VerifyLoginRequest:async (otp)=>{
        set({isFormSubmit:true});
        let email=  getEmail()
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false});
        if(res.data['status']=== "success"){
            return true
        }
        else {
            return false
        }
    },


    // user login or logout manage system
    isLogin:()=>{
        if (cookie.get('token')){
            return true
        }
        else {
            return false
        }
    },
// user logout
    UserLogoutRequest:async ()=>{
    set({isFormSubmit:true});
    let res = await axios.get(`/api/v1/UserLogout`);
    set({isFormSubmit:false});
    if(res.data['status']=== "success"){
        cookie.remove('token')
        return true
    }
    else {
        return false
    }
},
// profile create and update
    ProfileForm:{cus_add:"",cus_city:"", cus_country:"", cus_fax:"",cus_name:"" ,cus_phone:"" ,cus_postcode:"" ,cus_state:"" ,ship_add:"" ,ship_city:"" ,ship_country:"" ,ship_name:"" ,ship_phone:"" ,ship_postcode:"" ,ship_state:""},
    PofileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }

        }))
    },
ProfileDetails:null,
    ProfileDetailsRequest:async ()=>{
        try {
            let res=await axios.get(`/api/v1/ReadProfile`);
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data'][0]});
                set({ProfileForm:res.data['data'][0]});

            }
            else {
                set({ProfileDetails:[]});
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },
    ProfileSaveRequest:async (postBody)=>{
        try {
           set({ProfileDetails:null}) //এই অংশে ProfileDetails-এর মানকে null করা হচ্ছে। অর্থাৎ, প্রোফাইল সেভের রিকোয়েস্টের আগে আগের ডেটা মুছে ফেলা হচ্ছে বা রিসেট করা হচ্ছে। এটি তখনই প্রয়োজন হতে পারে, যখন আপনি নতুন ডেটা আপডেট হওয়ার আগের ডেটা সরিয়ে ফেলার কাজ করতে চান।
            let res=await axios.post(`/api/v1/ProfileUpdate`, postBody);
           if(res.data['status']==="success"){
               return res.data
           }else {
               return {
                   status: "error", // ত্রুটি হলে status error সেট করা
                   message: "Failed to update profile"
               }
           }

        }catch (e) {
            unauthorized(e.response.status)
        }
    }


}))
export  default UserStore;