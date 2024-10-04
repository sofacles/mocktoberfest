
import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";
import { getCatFact } from "./CatService";

test("mockify", async () => {
    const mockCatFact = jest.fn();

    mockCatFact.mockImplementation(() => ({fact: "mocked"}));
    
    
    jest.mock('./CatService', () => ({
        __esModule: true, 
        default: "mockedDefaultExport",
        getCatFact: mockCatFact
      }));
    
    
    const element = render(
        <Component />
    );
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked");//Fails! value not mocked
});