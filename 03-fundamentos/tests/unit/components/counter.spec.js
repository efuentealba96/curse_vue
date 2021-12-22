// import Counter from "../../../src/components/Counter.vue"
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  //   test("debe de haceer match con el snapshot", () => {
  //     const wrapper = shallowMount(Counter);

  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  test("H2 debe de tener el valor por defect", () => {
    const h2Value = wrapper.find("h2").text();

    expect(h2Value).toBe("Counter");
  });

  test("El valor por defecto debe ser 7 en el p", () => {
    // const pTags = wrapper.findAll("p");
    const pTag = wrapper.find('[data-testid="counter"]').text();
    // expect(pTags[1].text()).toBe("7");
    expect(pTag).toBe("7");
  });

  test("Debe de incrementar y decrementrar el contador", async () => {
    const [inceraseBtn, decreaseBtn] = wrapper.findAll("button");

    await inceraseBtn.trigger("click");
    await inceraseBtn.trigger("click");
    await inceraseBtn.trigger("click");

    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    const pTag = wrapper.find('[data-testid="counter"]').text();
    expect(pTag).toBe("8");
  });

  test("Debe de establecer el valor por defecto", () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  test("Debe de mostar la prop title", () => {
    const wrapper = shallowMount(Counter, {
      props: {
        title: "Hola mundo",
      },
    });

    expect(wrapper.find("h2").text()).toBe("Hola mundo");
  });
});
