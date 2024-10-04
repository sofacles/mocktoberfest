import React, { useContext } from "react";
import { getCatFact } from "./CatService";

const Component = () => {
  const blah = getCatFact(); 
  console.info(blah);
  const {fact} = blah;
    return <div data-testid="my-div">{fact}</div>
}

export default Component;