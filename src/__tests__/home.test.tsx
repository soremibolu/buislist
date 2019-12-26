import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../routes/public/home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home page", () => {
  it("Should render home page", () => {
    shallow(<Home />);
  });
  it("Should display initial states", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(".header-filtr form #location").text()).toEqual("");
  });
  it("Should set location state", () => {
    const wrapper = mount(<Home />);
    wrapper
      .find(".header-filtr form #location")
      .simulate("change", { target: { value: "Ibadan" } });
    expect(wrapper.find("#location").text()).toBe("Ibadan");
  });

  // it("displays error for invalid user name input", () => {
  //   const wrapper = mount(<Home name={""} />);
  //   wrapper
  //     .find("input#name")
  //     .simulate("change", { target: { value: "94+944" } });
  //   expect(wrapper.find(".nameError")).toHaveLength(1);
  // });

  // it("displays set state", () => {
  //   const wrapper = mount(<Home name={"ini"} />);
  //   wrapper
  //     .find("input#name")
  //     .simulate("change", { target: { value: "Blessing" } });
  //   expect(wrapper.find("p.user").text()).toBe("Blessing");
  // });
});
