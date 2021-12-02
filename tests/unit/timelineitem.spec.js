import { shallowMount } from "@vue/test-utils";
import TimelineItem from "@/components/TimelineItem.vue";

describe("TimelineItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(TimelineItem, {
      propsData: {
        timelineItem: {
          title: "title",
          date: "date",
          company: "company",
          description: "description",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the content", () => {
    const wrapper = shallowMount(TimelineItem, {
      propsData: {
        timelineItem: {
          title: "Lorem Ipsum",
          date: "2021",
          company: "Microsoft",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        },
      },
    });
    expect(wrapper.find(".item-title").text()).toEqual("Lorem Ipsum");
    expect(wrapper.find(".item-date").text()).toEqual("2021");
    expect(wrapper.find(".item-company").text()).toEqual("Microsoft");
    expect(wrapper.find(".item-desctiption").text()).toEqual(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    );
  });
});
