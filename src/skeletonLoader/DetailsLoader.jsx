// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import imgPlaceholder from "../assets/images/image.json"
const DetailsLoader = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-7 align-content-center p-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {
                                    Array.from({length:10}).map(()=>{
                                        return(
                                            // eslint-disable-next-line react/jsx-key
                                            <Skeleton count={1}/>
                                        )
                                    })
                                }
                            </div>
                            {
                                Array.from({length:4}).map(()=>{
                                    return(
                                        // eslint-disable-next-line react/jsx-key
                                         <div className="col-3">
                                              <Lottie className="w-100" animationData={imgPlaceholder} loop={true}/>
                                          </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-5 p-1">
                    {
                        Array.from({length:16}).map(()=>{
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Skeleton count={1}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default DetailsLoader;