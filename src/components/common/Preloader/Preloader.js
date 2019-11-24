import preloader from "../../../assets/images/Double Ring-1s-200px.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={ {backgroundColor: 'black'} }>
        <img src={preloader} />
    </div>
}

export default Preloader