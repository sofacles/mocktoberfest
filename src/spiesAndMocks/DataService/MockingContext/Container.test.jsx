//https://stackoverflow.com/questions/54691799/how-to-test-a-react-component-that-is-dependent-on-usecontext-hook


import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});

test("mock hook", async () => {
    useContextMock.mockReturnValue({stars: {star: "Andromeda"}});
    const element = render(
        <Container />
    );
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("Andromeda");//Fails! value not mocked
});