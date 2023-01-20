import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function () {
    render(<Box width='100px' height='100px' color='#ffffff'/>);
});

it("matches snapshot", function () {
    const {asFragment} = render(<Box width='100px' height='100px' color='#ffffff'/>);
    expect(asFragment()).toMatchSnapshot();
})