import React from "react";
import Component from "./Component";
import { StarsProvider } from "./useStars";

const Container = () => {
    return (
        <StarsProvider>
            < Component />
        </StarsProvider>
    )
}

export default Container;