import React, { useEffect, useState } from "react";
import Data from "../DataService/Data";
import Junco from "../DataService/Junco";
import Shrew from "../DataService/Shrew";

const AnimalRace = () => {
  const [juncoPosition, setJuncoPosition] = useState(0);
  const [shrewPosition, setShrewPosition] = useState(0);
  useEffect(() => {
    const shrew = new Shrew();
    const junco = new Junco();

    setJuncoPosition(junco.reportPositionAtT(3));
    setShrewPosition(shrew.reportPositionAtT(3));
  }, []);

  return (
    <>
      <h1>Junco and Shrew inherit from Organism</h1>
      <h2>At T = 3</h2>
      <div>
        The shrew is at <span data-testid="shrew-span">{shrewPosition}</span>
      </div>
      <div>The junco is at {juncoPosition}</div>
    </>
  );
};

export { AnimalRace };
