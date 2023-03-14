import React from "react";
import { render, screen } from "@testing-library/react";
import { AnimalRace } from "./MockingBaseClassMethod";
import Shrew from "../DataService/Shrew";

//If you want to get at a base class function through prototype, I'm not sure how to do it with mocking, but you can spy

describe("AccountList", () => {
  beforeEach(() => {
    jest.spyOn(Shrew.prototype, "reportPositionAtT").mockImplementation(() => {
      return 57;
    });
    render(<AnimalRace />);
  });

  test("renders Animal race page", () => {
    const shrewSpan = screen.getByTestId("shrew-span");
    expect(shrewSpan).toHaveTextContent("57");
  });
});
