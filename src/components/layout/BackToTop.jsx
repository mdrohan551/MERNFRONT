// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';

const BackToTop = () => {
    const [backToTop, setBackToTop] =useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 100){
                setBackToTop(true);
            }else {
                setBackToTop(false);
            }
        })
    }, []);

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })

    }

    return (
        <>
            <button
                onClick={scrollUp}
                className={`bactTotop btn btn-success rounded-5 ${backToTop === true ? 'show' : ''}`}>
                <i className="bi bi-arrow-up-circle"></i>
            </button>
        </>
    );
};

export default BackToTop;

