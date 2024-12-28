// eslint-disable-next-line no-unused-vars
import React from 'react';
import CartStore from "../../store/CartStore.js";






const CartButtonSubmite = (props) => {
    let {isCartSubmit}=CartStore();
    if(isCartSubmit===false){
        // eslint-disable-next-line react/prop-types
        return <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }
    else {
        // eslint-disable-next-line react/prop-types
        return <button disabled={true} className={props.className} ><div className="spiner-border spinner-border-sm" role="status"></div> processing...</button>
    }
};

export default CartButtonSubmite;