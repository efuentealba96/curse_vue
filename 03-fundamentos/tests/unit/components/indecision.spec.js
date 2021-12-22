import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision Component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  test("Debe hacer match el snapShot del componente", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Esscribir en el input no debe de disparar nada (console.log())", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");
    await input.setValue("Hola Mundo");

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalledTimes(0);
  });

  test("Escribir un '?' debe de disparar el getAnswer ", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");
    await input.setValue("Hola Mundo?");

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });

  test("Pruebas getAnswer", async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si");
  });

  test("Pruebas en getAnswer - Fallo en la API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo cargar el API");
  });
});
