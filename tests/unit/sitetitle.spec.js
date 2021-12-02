import { shallowMount } from "@vue/test-utils";
import SiteTitle from "@/components/SiteTitle.vue";

describe("SiteTitle.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(SiteTitle);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct name", () => {
    const wrapper = shallowMount(SiteTitle, {
      propsData: {
        firstName: "Stuart",
        lastName: "Leaver",
      },
    });
    expect(wrapper.find(".site-title-text").text()).toEqual("Stuart Leaver");
  });
});
