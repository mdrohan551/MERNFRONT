// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import cartStore from "../../store/CartStore.js";
import Cartloader from "../../skeletonLoader/cartloader.jsx";
import NoData from "../layout/No-Data.jsx";
import CartButtonSubmite from "./CartButtonSubmite.jsx";
import {toast} from "react-hot-toast";
import {DeleteAlert} from "../../utility/Utility.js";
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";




const CartList = () => {
    const navigate=useNavigate();
    const { ProfileForm, ProfileDetailsRequest } = UserStore();
    const {
        cartList,
        cartTotal,
        cartVatTotal,
        cartPayabletotal,
        CartListRequestRead,
        RemoveCartListRequest,
        createInvoiceRequest
    } = cartStore();

    useEffect(() => {
        (async () => {
            await CartListRequestRead();
            await ProfileDetailsRequest()
        })()

    }, []);


    // remove cart list item

    const confirmRemove = async (id) => {
        const isConfirmed = await DeleteAlert();  // Swal confirmation
        if (isConfirmed) {
            await RemoveCartListRequest(id);  // Delete item if confirmed
            toast.success('Item removed successfully');
            await CartListRequestRead();  // Reload cart list after deletion
        }
    };
// create invoice
    // Check if any form value is empty
    const isEveryFormValueEmpty = () => {
        return Object.values(ProfileForm).some(value => value.trim() === "");
    };
    const CreateInvoice=async ()=>{
        if(isEveryFormValueEmpty()){
            navigate('/profile')
        }
        else {await createInvoiceRequest()}

    }
    if (cartList === null) {
        return <Cartloader/>
    }
    else if (cartList.length === 0) {
        return <NoData text='CART'/>

    }
    else {

        return (

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    cartList.map((item, i) => {

                                        let price = item['product']['price']
                                        if (item['product']['discount'] === true) {
                                            price = item['product']['discountPrice']
                                        }

                                        return (
                                            <li key={i}
                                                className="list-group-item d-flex justify-content-between align-items-start">
                                                <img className="rounded-1" width="90" height="auto" alt='cartImg'
                                                     src={item['product']['image']}/>
                                                <div className="ms-2 me-auto">
                                                    <p className="fw-lighter m-0">{item['product']['title']}</p>
                                                    <p className="fw-lighter my-1">Unit
                                                        price: {price},Qty: {item['qty']}, Size: {item['size']},
                                                        Color: {item['color']}</p>
                                                    <p className=" h6 fw-bold m-0 text-dark">Total <i
                                                        className="bi bi-currency-dollar"></i>{parseInt(price) * parseInt(item['qty'])}
                                                    </p>
                                                </div>
                                                <button onClick={() => confirmRemove(item['_id'])}
                                                        className="btn btn-sm btn-outline-danger"><i
                                                    className="bi bi-trash"></i></button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="my-4">
                                <ul className="list-group bg-transparent  list-group-flush">
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end">Total: <i
                                            className="bi bi-currency-dollar"/>{cartTotal} </span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end"> Vat(5%): <i
                                            className="bi bi-currency-dollar"/>{cartVatTotal}</span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end">  Payable: <i
                                            className="bi bi-currency-dollar"/>{cartPayabletotal}</span>
                                    </li>
                                    <li className="list-group-item bg-transparent ">
                                            <span className="float-end">
                                                <CartButtonSubmite text="Check Out " onClick={CreateInvoice} className="btn px-5 mt-2 btn-success"/>
                                            </span>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default CartList;