
import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";
import { getCatFact } from "./CatService";

jest.mock('./CatService', () => ({
    __esModule: true, 
    default: "mockedDefaultExport",
    getCatFact: jest.fn(() => ({fact: "puny"})),
  }));



test("mockify", async () => {

    
    const element = render(
        <Component />
    );
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("Andromeda");//Fails! value not mocked
});