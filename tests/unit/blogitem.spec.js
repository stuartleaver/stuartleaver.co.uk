import { shallowMount } from "@vue/test-utils";
import BlogItem from "@/components/BlogItem.vue";

describe("BlogItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(BlogItem, {
      propsData: {
        item: {
          title: "title",
          image: "image",
          date: "2020-04-27T19:09:07",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the content", () => {
    const wrapper = shallowMount(BlogItem, {
      propsData: {
        item: {
          title: "Lorem ipsum",
          image: "https://stuartleaver.dev/images/test.png",
          date: "2021-10-01T19:09:07",
        },
      },
    });
    expect(wrapper.find(".item-info h4").text()).toEqual("Lorem ipsum");
    expect(wrapper.find(".item-info img").attributes("src")).toEqual(
      "https://stuartleaver.dev/images/test.png"
    );
    expect(wrapper.find(".item-info p").text()).toEqual("1st Oct 2021");
  });
});
