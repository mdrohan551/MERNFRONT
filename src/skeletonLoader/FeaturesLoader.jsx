// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import imagePlaceholder from '../assets/images/image.json'

const FeaturesLoader = () => {
    return (
        <div>
            <div className="container section">
                <div className="row">
                 {/*loader box 4 bar run korar jonno  arry length */}
                    {
                        Array.from({length:4}).map(()=>{
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <Lottie className="w-100" animationData={imagePlaceholder} loop={true}/>
                                                </div>
                                                <div className="col-8">
                                                    <Skeleton count={3}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturesLoader;