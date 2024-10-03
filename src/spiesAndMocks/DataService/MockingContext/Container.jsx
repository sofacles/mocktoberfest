import React from "react";
import Component from "./Component";
import { StarsProvider } from "./useStars";

const Container = () => {
    return (<div>
        <StarsProvider><Component /></StarsProvider>
    </div>)
}

export default Container;