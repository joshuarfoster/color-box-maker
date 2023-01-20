import React from "react";
import { render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

function addBox (boxList, height = '100px', width = '100px', color = "#ffffff") {
    const heightInput = boxList.getByLabelText(/Height/i);
    const widthInput = boxList.getByLabelText(/Width/i);
    const colorInput = boxList.getByLabelText(/Color/i);
    fireEvent.change(colorInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.queryByRole("button", { type: "submit" });
    fireEvent.click(button);
};

it("renders without crashing", function () {
    render(<BoxList/>);
});

it("matches snapshot", function () {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const boxList = render(<BoxList/>);
    addBox(boxList);
    const deleteBtn = boxList.queryByText("X")
    expect(deleteBtn).toBeInTheDocument();
});

it("should delete old box", function () {
    const boxList = render(<BoxList/>);
    addBox(boxList);
    const deleteBtn = boxList.queryByText("X");
    fireEvent.click(deleteBtn);
    expect(deleteBtn).not.toBeInTheDocument();
});