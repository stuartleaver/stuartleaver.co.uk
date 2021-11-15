import { shallowMount } from "@vue/test-utils";
import Certifications from "@/views/Certifications.vue";
import axios from "axios";

jest.mock("axios");

const certifications = {
  azure: {
    title: "Microsoft Azure",
    certifications: [
      {
        title: "title",
        image: "image",
        imageAlt: "imageAlt",
      },
    ],
  },
};

describe("Certifications.vue", () => {
  it("renders componant", () => {
    axios.get.mockResolvedValueOnce(certifications);

    const wrapper = shallowMount(Certifications);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    axios.get.mockResolvedValueOnce(certifications);

    const wrapper = shallowMount(Certifications);
    expect(wrapper.find(".page-header h2").text()).toEqual("Certifications");
  });
});
