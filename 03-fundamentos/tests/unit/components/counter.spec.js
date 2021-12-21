// import Counter from "../../../src/components/Counter.vue"
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  //   test("debe de haceer match con el snapshot", () => {
  //     const wrapper = shallowMount(Counter);

  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  test("H2 debe de tener el valor por defect", () => {
    const wrapper = shallowMount(Counter);
    const h2Value = wrapper.find("h2").text();
    console.log(h2Value);

    expect(h2Value).toBe("Counter");
  });
});
