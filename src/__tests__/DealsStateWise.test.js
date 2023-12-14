import React from "react";
import { shallow } from "enzyme";
import DealsStateWise from "../components/home/modules/deals-state";
import response from "../response.json";
import { Context } from "../context/context";

const Contents = response;
const Settings = response.items[0];
describe("DealsStateWise Component", () => {
  const sampleState = { Settings, Contents };
  const sampleProps = Settings;

  it("should render without errors", () => {
    const wrapper = shallow(
      <Context.Provider value={{ State: sampleState, Props: sampleProps }}>
        <DealsStateWise />
      </Context.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render Swiper component", () => {
    const wrapper = shallow(
      <Context.Provider value={{ State: sampleState, Props: sampleProps }}>
        <DealsStateWise />
      </Context.Provider>
      );
      console.log(wrapper);
    const swiperComponent = wrapper.find("Swiper");
    expect(swiperComponent.exists()).toBe(true);
  });

  // it("should call goNext function on next button click", () => {
  //   const wrapper = shallow(
  //     <Context.Provider value={{ State: sampleState, Props: sampleProps }}>
  //       <DealsStateWise />
  //     </Context.Provider>
  //   );
  //   const goNextMock = jest.spyOn(wrapper.instance(), "goNext");
  //   wrapper.instance().forceUpdate();

  //   const nextButton = wrapper.find(".swiper-button-next-custom");
  //   nextButton.simulate("click");

  //   expect(goNextMock).toHaveBeenCalled();
  // });

  // it("should call goPrev function on prev button click", () => {
  //   const wrapper = shallow(
  //     <Context.Provider value={{ State: sampleState, Props: sampleProps }}>
  //       <DealsStateWise />
  //     </Context.Provider>
  //   );
  //   const goPrevMock = jest.spyOn(wrapper.instance(), "goPrev");
  //   wrapper.instance().forceUpdate();

  //   const prevButton = wrapper.find(".swiper-button-prev-custom");
  //   prevButton.simulate("click");

  //   expect(goPrevMock).toHaveBeenCalled();
  // });
});
