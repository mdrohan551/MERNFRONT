// eslint-disable-next-line no-unused-vars
import React from 'react';
import featureStore from "../../store/FeatureStore.js";
import LegalsLoader from "../../skeletonLoader/LegalsLoader.jsx";
import parse from "html-react-parser"
// page a asar por upore scroll auto hobe
let auto = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,           // স্ক্রল পজিশন (উপরে)
        });
    }, 300); // 3000ms বা 3 সেকেন্ড পরে স্ক্রল হবে
};
const LegalsContent = () => {
    const {LegalsDetails}=featureStore();
    if(LegalsDetails===null){
      return  <LegalsLoader/>
    }

 else {
        return (
            <div className="container mt-5" onChange={auto()}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            {
                                parse(LegalsDetails[0]['description'])
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LegalsContent;