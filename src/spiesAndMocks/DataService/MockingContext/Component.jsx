import React, { useContext } from "react";
import { StarsContext } from "./useStars";

const Component = () => {
    const { stars } = useContext(StarsContext);
    return <div>{stars.star} Component</div>
}

export default Component;