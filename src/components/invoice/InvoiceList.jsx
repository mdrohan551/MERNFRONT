// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import cartStore from "../../store/CartStore.js";
import Cartloader from "../../skeletonLoader/cartloader.jsx";
import NoData from "../layout/No-Data.jsx";
import {Link} from "react-router-dom";

const InvoiceList = () => {
    const {InvoiceList,InvoiceListRequestRead}=cartStore();
    useEffect(() => {
        (async ()=>{
            await InvoiceListRequestRead();
        })()
    }, []);
    if(InvoiceList===null){
        return <Cartloader/>
    }
    else if(InvoiceList.length===0){
        return <NoData text='Invoice'/>
    }
else {
        return (
            <div className="container mt-3 pt-5 pb-5 ">
                <div className="row pt-5 pb-5">
                    <div className="col-md-12 pt-5">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    InvoiceList.map((item,i)=>{
                                        return(<li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="">
                                                        <p className="m-1"><b>Invoice No::</b> {item['tran_ID']}</p>
                                                        <p className="m-1"><b>Customer:</b> {item['customer_details']}</p>
                                                        <p className="m-1"><b>Shipping: </b>{item['ship_details']}</p>
                                                        <p className="m-1"><b>Payment: </b>{item['payment_status']}</p>
                                                        <p className="m-1"><b>Delivery: </b> {item['delivery_status']}</p>
                                                    </div>
                                                </div>
                                                <Link className="btn btn-success" to={`/invoice/${item['_id']}`}>Details</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }









};

export default InvoiceList;