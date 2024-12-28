// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const Review = () => {
    const {ReviewList}=ProductStore();
    return (

        <div>
            <div className=" mt-4">

                  {
                      ReviewList!==null ? (ReviewList.map((item,i)=>{
                          return (
                              <div key={i} className=" bg-opacity-10 p-3 mt-2 rounded border">
                                  <div className="d-flex">
                                      <div className="flex-shrink-0">
                                          <i className="bi bi-person-fill"></i>
                                      </div>
                                      <div className="ms-3">
                                          <p className="fw-bold" style={{color: '#166534'}}>
                                              {item['Profile']['cus_name']}
                                          </p>
                                          <p className="mt-2">
                                              {item['des']}
                                          </p>
                                       <div className="d-flex">
                                           <StarRatings rating={parseFloat(item['rating'])}
                                                        starRatedColor="red"
                                                        starDimension="15px"
                                                        starSpacing="2px" />
                                           <div style={{fontSize:"30px"}}>{item['rating']==='1'?('😩'):null}</div>
                                           <div style={{fontSize:"30px"}}>{item['rating']==='2'?('😐'):null}</div>
                                           <div style={{fontSize:"30px"}}>{item['rating']==='3'?('🙂'):null}</div>
                                           <div style={{fontSize:"30px"}}>{item['rating']==='4'?('☺️'):null}</div>
                                           <div style={{fontSize:"30px"}}>{item['rating']==='5'?('😍'):null}</div>
                                       </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })) :(<div>
                          <h5 className="card-title placeholder-glow">
                              <span className="placeholder col-3"></span>
                          </h5>
                          <p className="card-text placeholder-sm">
                              <span className="placeholder col-1"></span>
                              <span className="placeholder col-5"></span>
                              <span className="placeholder col-4"></span>
                              <span className="placeholder col-4"></span>
                          </p>
                      </div>)
                  }

            </div>


            {/*<ol className="list-group list-group-numbered  ">*/}

            {/*    {*/}
            {/*        ReviewList !== null ? (ReviewList.map((item, index) => {*/}
            {/*            return (*/}

            {/*                */}
            {/*                <li key={index} className="list-group bg-transparent">{item['Profile']['cus_name']}</li>*/}
            {/*            )*/}
            {/*        })) : <span></span>*/}
            {/*    }*/}
            {/*</ol>*/}
        </div>
    );
};

export default Review;