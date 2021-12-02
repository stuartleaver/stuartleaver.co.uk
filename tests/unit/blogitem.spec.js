import { shallowMount } from "@vue/test-utils";
import BlogItem from "@/components/BlogItem.vue";

describe("BlogItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(BlogItem, {
      propsData: {
        item: {
          title: "title",
          image: "image",
          imageAlt: "imageAlt",
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
          imageAlt: "Image Alt Test",
          date: "2021-10-01T19:09:07",
        },
      },
    });
    expect(wrapper.find(".item-info h4").text()).toEqual("Lorem ipsum");
    expect(wrapper.find(".item-info img").attributes("src")).toEqual(
      "https://stuartleaver.dev/images/test.png"
    );
    expect(wrapper.find(".item-info img").attributes("alt")).toEqual(
      "Image Alt Test"
    );
    expect(wrapper.find(".item-info p").text()).toEqual("1st Oct 2021");
  });
});
