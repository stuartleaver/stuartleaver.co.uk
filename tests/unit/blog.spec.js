import { shallowMount } from "@vue/test-utils";
import Blog from "@/views/Blog.vue";

describe("Blog.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(Blog);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    const wrapper = shallowMount(Blog);
    expect(wrapper.find(".page-header h2").text()).toEqual("Blog");
  });
});
