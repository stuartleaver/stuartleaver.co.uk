import { shallowMount } from "@vue/test-utils";
import SiteFooter from "@/components/SiteFooter.vue";

describe("SiteFooter.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(SiteFooter);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct copyright", () => {
    const wrapper = shallowMount(SiteFooter);
    const year = new Date().getFullYear();
    expect(wrapper.find(".copyright").text()).toEqual(
      `© Stuart Leaver ${year}`
    );
  });
});
