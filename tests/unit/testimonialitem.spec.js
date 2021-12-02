import { shallowMount } from "@vue/test-utils";
import TestimonialItem from "@/components/TestimonialItem.vue";

describe("TestimonialItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(TestimonialItem, {
      propsData: {
        testimonial: {
          text: "text",
          author: "author",
          role: "role",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the content", () => {
    const wrapper = shallowMount(TestimonialItem, {
      propsData: {
        testimonial: {
          text: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.",
          author: "John Doe",
          role: "CEO Company",
        },
      },
    });
    expect(wrapper.find(".testimonial-text").text()).toEqual(
      "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non."
    );
    expect(wrapper.find(".testimonial-author").text()).toEqual("John Doe");
    expect(wrapper.find(".testimonial-role").text()).toEqual("CEO Company");
  });
});
