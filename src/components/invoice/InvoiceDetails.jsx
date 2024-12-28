// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import ReviewSubmitButton from "./ReviewSubmitButton.jsx";
import {Modal} from "react-bootstrap";
import cartStore from "../../store/CartStore.js";
import Cartloader from "../../skeletonLoader/cartloader.jsx";
import NoData from "../layout/No-Data.jsx";
import {useParams} from "react-router-dom";
import validationHelper from "../../utility/ValidationHelper.js";
import {toast} from "react-toastify";
import ReviewStore from "../../store/ReviewStore.js";

const InvoiceDetails = () => {
    // store calling
    const {id} = useParams();
    const {InvoiceDetails, InvoiceProductDetails} = cartStore();
    let {ReviewFormData, ReviewFormOnchange, ReviewsaveRequest} =ReviewStore()
    useEffect(() => {
        (async () => {
            await InvoiceProductDetails(id);
        })()
    }, []);


// Create Review
const ReviewModal=(id)=>{
    setShowModal(true);
    ReviewFormOnchange('productID',id)
}



    // USESTATE
    const [showModal, setShowModal] = useState(false);
    const handleClose=()=>setShowModal(false);



    // star rating
    const handleRatingChange = (e) => {
        const ratingValue = Number(e.target.value);
        ReviewFormOnchange('rating',ratingValue); // রেটিংকে ReviewFormData তে সেট করা হচ্ছে
    };
     // submit Review
    const submitReview = async () => {
        console.log(ReviewFormData)
        if (validationHelper.IsEmpty(ReviewFormData.des) || validationHelper.IsEmpty(ReviewFormData.rating)) {
            toast.error("Review required");
        } else {

            let res = await ReviewsaveRequest(ReviewFormData);
            if (res) {
                toast.success('New Review created successfully');
                setShowModal(false);
            } else {
                toast.error("Something went wrong");
            }
        }
    };


    if (InvoiceDetails === null) {
        return <Cartloader/>
    } else if (InvoiceDetails.length === 0) {
        return (
            <NoData text='INVOICES Product'/>
        )
    } else {

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    InvoiceDetails.map((item, i) => {

                                        return (
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <img className="rounded-1" alt="" width="90" height="auto"
                                                     src={item['product']['image']}/>
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-medium h6">
                                                        {item['product']['title']}
                                                    </div>
                                                    <span>Unit Price: {item['price']}, Total: {item['price'] * parseInt(item['qty'])}</span><br/>
                                                    <span>Qty: {item['qty']}, Size: {item['size']}, Color: {item['color']}</span>
                                                </div>
                                                <button className="btn btn-success" onClick={()=>ReviewModal(item['productID'])}>Create Review</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Modal show={showModal} onHide={setShowModal}>
                    <Modal.Header closeButton>
                        <h6>Create Review</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 p-2">
                                    <label className="form-label">Rating</label>
                                    <div className="rating">
                                        <input type="radio" id="star5" name="rating" value="5"
                                               onChange={handleRatingChange}/>
                                        <label htmlFor="star5"></label>
                                        <input type="radio" id="star4" name="rating" value="4"
                                               onChange={handleRatingChange}/>
                                        <label htmlFor="star4"></label>
                                        <input type="radio" id="star3" name="rating" value="3"
                                               onChange={handleRatingChange}/>
                                        <label htmlFor="star3"></label>
                                        <input type="radio" id="star2" name="rating" value="2"
                                               onChange={handleRatingChange}/>
                                        <label htmlFor="star2"></label>
                                        <input type="radio" id="star1" name="rating" value="1"
                                               onChange={handleRatingChange}/>
                                        <label htmlFor="star1"></label>
                                    </div>
                                </div>
                                <div className="col-12 p-2">
                                    <label className="form-label">Review</label>
                                    <textarea onChange={(e) =>{ ReviewFormOnchange('des',e.target.value)}}
                                              className="form-control" rows={7}/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-dark" onClick={handleClose}>Close</button>
                        <ReviewSubmitButton text="Submit" className="btn btn-success" onClick={submitReview}/>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


};

export default InvoiceDetails;