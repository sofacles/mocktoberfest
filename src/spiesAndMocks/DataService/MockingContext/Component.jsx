import React, { useContext } from "react";
import { useStarsContext } from "./useStars";

const Component = () => {
    const {stars}  = useStarsContext();
    return <div data-testid="my-div">{stars.star} Component</div>
}

export default Component;