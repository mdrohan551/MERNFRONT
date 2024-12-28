// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import NoData from "../components/layout/No-Data.jsx";


const Error404 = () => {
    return (
        <div className='container-md '>
          <div className="row ">
              <NoData text="404"  />

              <div className="col-lg-12">
                  <div className="all d-flex justify-content-center align-items-center ">


                      <div className="errors ">
                          <Link className="social-icons fs-1" to='https://github.com/mdrohan551'>
                              <p className='fs-6'>@github</p>
                              <Link className='fs-6'  to='https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fmdrohan551'>Follow</Link>
                              <i className="bi bi-github fs-1"></i>
                          </Link>
                          <Link className="social-icons fs-1" to='https://www.facebook.com/rohanmohammd404'>
                              <p className='fs-6'>@facebook</p>
                              <a className='fs-6' >Follow</a>
                              <i className="bi bi-facebook fs-1"></i>
                          </Link>
                          <Link className="social-icons fs-1" to='https://www.linkedin.com/in/rohanmohammad/'>
                              <p className='fs-6'>@LinkedIn</p>
                              <a className='fs-6' >Connect</a>
                              <i className="bi bi-linkedin fs-1"></i>
                          </Link>

                      </div>

                  </div>


              </div>
              <Link className='text-center  fs-1 text-secondary pt-2'  to='/'><span className='bi bi-arrow-left-square ms-1 fs-1 text-primary'>     </span> Back TO Home</Link>
          </div>

        </div>
    );
};

export default Error404;