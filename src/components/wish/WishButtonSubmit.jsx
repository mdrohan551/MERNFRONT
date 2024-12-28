// eslint-disable-next-line no-unused-vars
import React from 'react';
import wishStore from "../../store/WishStore.js";

const WishButtonSubmit = (props) => {
    let {isWishSubmit}=wishStore();
    if(isWishSubmit===false){
        // eslint-disable-next-line react/prop-types
        return <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }
    else {
        return (
            // eslint-disable-next-line react/prop-types
            <button disabled={true}  type="submit" className={props.className} >Processing...</button>
        )
    }

};

export default WishButtonSubmit;