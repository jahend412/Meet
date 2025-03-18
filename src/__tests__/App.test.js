import { render } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("<App /> component", () => {
  test("renders list of events", () => {
    render(<App />);
    const eventList = document.querySelector("#event-list");
    expect(eventList).toBeInTheDocument();
  });

  test("render CitySearch", () => {
    const AppDom = render(<App />).container.firstChild;
    expect(AppDom.querySelector("#city-search")).toBeInTheDocument();
  });
});
