// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReviewStore from '../../store/ReviewStore'

const ReviewSubmitButton = (props) => {
    let { isReviewSubmit } = ReviewStore();
    if(isReviewSubmit===false) {

        // eslint-disable-next-line react/prop-types
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>

    }
    else{
        return (
            // eslint-disable-next-line react/prop-types
            <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div>Processing...</button>
        );
    }
};

export default ReviewSubmitButton;