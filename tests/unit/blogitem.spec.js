import { shallowMount } from "@vue/test-utils";
import BlogItem from "@/components/BlogItem.vue";

describe("BlogItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(BlogItem, {
      propsData: {
        item: {
          title: "title",
          image: "image",
          date: "date",
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
          date: "1st Oct 2021",
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
