
import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";
import * as useCatService from "./CatService";

test("mockify", async () => {
    useCatService.getCatFact = jest.fn(() => ({fact: "mocked"}));

    const element = render(
        <Component />
    );
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked");
});