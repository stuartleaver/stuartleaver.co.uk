import { shallowMount } from "@vue/test-utils";
import CV from "@/views/CV.vue";
import axios from "axios";

jest.mock("axios");

const experience = {
  experience: {
    title: "Experience",
    items: [
      {
        title: "title",
        date: "date",
        company: "company",
        description: "description",
      },
    ],
  },
};

describe("CV.vue", () => {
  it("renders componant", () => {
    axios.get.mockResolvedValueOnce(experience);

    const wrapper = shallowMount(CV);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    axios.get.mockResolvedValueOnce(experience);

    const wrapper = shallowMount(CV);
    expect(wrapper.find(".page-header h2").text()).toEqual("CV");
  });
});
