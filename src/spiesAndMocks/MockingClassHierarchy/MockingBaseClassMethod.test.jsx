import React from "react";
import { render, screen } from "@testing-library/react";
import { AnimalRace } from "./MockingBaseClassMethod";
import Organism from "../DataService/Organism";

//OK you can mock the base class by name
jest.mock("../DataService/Organism");

describe("AccountList", () => {
  beforeEach(() => {
    Organism.mockImplementation(() => {
      return { reportPositionAtT: (t) => 56 };
    });
    render(<AnimalRace />);
  });

  test("renders Animal race page", () => {
    //screen.debug();
    debugger;
    const shrewSpan = screen.getByTestId("shrew-span");
    expect(shrewSpan).toHaveTextContent("56");
  });
});
