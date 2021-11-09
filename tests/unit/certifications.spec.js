import { shallowMount } from "@vue/test-utils";
import Certifications from "@/views/Certifications.vue";

describe("Certifications.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(Certifications);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    const wrapper = shallowMount(Certifications);
    expect(wrapper.find(".page-header h2").text()).toEqual("Certifications");
  });
});
