// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import UserStore from "../../store/UserStore.js";
import ProfileLoader from "../../skeletonLoader/ProfileLoader.jsx";
import { FailAlert, SuccessAlert } from "../../utility/Utility.js";
import { toast } from "react-toastify";

const ProfileForm = () => {
    const { ProfileDetails, ProfileDetailsRequest, ProfileForm, PofileFormChange, ProfileSaveRequest } = UserStore();

    // Request profile details on mount
    useEffect(() => {
        (async () => {
            await ProfileDetailsRequest();
        })();
    }, []);

    // Input danger system for empty fields
    const empty = (fieldName) => {
        return ProfileForm[fieldName].trim() === '' ? " border-danger alerBorder" : "";
    };

    // Profile form validation
    const isEveryFormValueEmpty = () => {
        return Object.values(ProfileForm).some(value => value.trim() === "");
    };

    // Save request
    const save = async () => {
        if (isEveryFormValueEmpty()) {
            await FailAlert('Please fill out all fields.');
        } else {
            let res = await ProfileSaveRequest(ProfileForm);
            if (res.status === 'success') {
                await SuccessAlert(res.message);
                await ProfileDetailsRequest();
            } else {
                toast.error(res.message || 'Something went wrong'); // General error message
            }
        }
    };

    if (ProfileDetails === null) {
        return <ProfileLoader />;
    } else {
        return (
            <div className="container mt-5">
                <div className="card p-5 rounded-3">
                    <h6>Customer Details</h6>
                    <hr />
                    <div className="row mb-4">
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Name</label>
                            <input
                                value={ProfileForm.cus_name}
                                onChange={(e) => PofileFormChange('cus_name', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_name')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Phone</label>
                            <input
                                value={ProfileForm.cus_phone}
                                onChange={(e) => PofileFormChange('cus_phone', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_phone')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Fax</label>
                            <input
                                value={ProfileForm.cus_fax}
                                onChange={(e) => PofileFormChange('cus_fax', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_fax')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Country</label>
                            <input
                                value={ProfileForm.cus_country}
                                onChange={(e) => PofileFormChange('cus_country', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_country')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer City</label>
                            <input
                                value={ProfileForm.cus_city}
                                onChange={(e) => PofileFormChange('cus_city', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_city')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer State</label>
                            <input
                                value={ProfileForm.cus_state}
                                onChange={(e) => PofileFormChange('cus_state', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_state')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Post Code</label>
                            <input
                                value={ProfileForm.cus_postcode}
                                onChange={(e) => PofileFormChange('cus_postcode', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_postcode')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Address</label>
                            <input
                                value={ProfileForm.cus_add}
                                onChange={(e) => PofileFormChange('cus_add', e.target.value)}
                                type="text"
                                className={`form-control${empty('cus_add')}`} />
                        </div>
                    </div>

                    <h6>Shipping Details</h6>
                    <hr />
                    <div className="row">
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Name</label>
                            <input
                                value={ProfileForm.ship_name}
                                onChange={(e) => PofileFormChange('ship_name', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_name')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Phone</label>
                            <input
                                value={ProfileForm.ship_phone}
                                onChange={(e) => PofileFormChange('ship_phone', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_phone')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Country</label>
                            <input
                                value={ProfileForm.ship_country}
                                onChange={(e) => PofileFormChange('ship_country', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_country')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping City</label>
                            <input
                                value={ProfileForm.ship_city}
                                onChange={(e) => PofileFormChange('ship_city', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_city')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping State</label>
                            <input
                                value={ProfileForm.ship_state}
                                onChange={(e) => PofileFormChange('ship_state', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_state')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Post Code</label>
                            <input
                                value={ProfileForm.ship_postcode}
                                onChange={(e) => PofileFormChange('ship_postcode', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_postcode')}`} />
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Address</label>
                            <input
                                value={ProfileForm.ship_add}
                                onChange={(e) => PofileFormChange('ship_add', e.target.value)}
                                type="text"
                                className={`form-control${empty('ship_add')}`} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-3 p-2">
                            <button onClick={save} className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProfileForm;
