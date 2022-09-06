import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./arrow.svg";

const Scroll = () => {
    return (
        <div>
            <ScrollToTop smooth component={<MySVG />} />
        </div>
    );
}

export default Scroll;