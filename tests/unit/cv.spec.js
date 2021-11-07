import { shallowMount } from "@vue/test-utils";
import CV from "@/views/CV.vue";

describe("CV.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(CV);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    const wrapper = shallowMount(CV);
    expect(wrapper.find(".page-header h2").text()).toEqual("CV");
  });
});
