// eslint-disable-next-line no-unused-vars
import React from 'react';
import notFound from '../../assets/images/no-results.png'
const NoData = (props) => {
    return (

        <div className="container p-5">


            <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center">
                    <img alt="" className="w-75" src={notFound}/>
                    <h1 className="text-danger">{props.text+"  "}<span className="text-secondary">DATA NOT FOUND</span></h1>
                    <div className="wrapper">
                        <span className="letter letter1">L</span>
                        <span className="letter letter2">o</span>
                        <span className="letter letter3">a</span>
                        <span className="letter letter4">d</span>
                        <span className="letter letter5">i</span>
                        <span className="letter letter6">n</span>
                        <span className="letter letter7">g</span>
                        <span className="letter letter8"></span>
                        <span className="letter letter9"></span>
                        <span className="letter letter10"></span>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default NoData;