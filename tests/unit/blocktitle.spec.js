import { shallowMount } from "@vue/test-utils";
import BlockTitle from "@/components/BlockTitle.vue";

describe("BlockTitle.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(BlockTitle);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct name", () => {
    const wrapper = shallowMount(BlockTitle, {
      propsData: {
        title: "About Me",
      },
    });
    expect(wrapper.find(".block-title h3").text()).toEqual("About Me");
  });
});
