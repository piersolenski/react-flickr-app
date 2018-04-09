import React from "react";
import { shallow } from "enzyme";
import Footer from "../js/components/Footer.js";

describe("Footer component", () => {
  it("contains the current year", () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.find("span").text();
    const currentYear = new Date().getFullYear();
    expect(text).toContain(currentYear);
  });
});
