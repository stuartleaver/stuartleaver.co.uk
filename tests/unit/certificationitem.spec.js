import { shallowMount } from "@vue/test-utils";
import CertificationItem from "@/components/CertificationItem.vue";

describe("CertificationItem.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(CertificationItem, {
      propsData: {
        certification: {
          title: "title",
          image: "image",
          imageAlt: "imageAlt",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the content", () => {
    const wrapper = shallowMount(CertificationItem, {
      propsData: {
        certification: {
          title: "Azure Solutions Architect",
          image: "azure-solutions-architect-expert-600x600.png",
          imageAlt: "azure-solutions-architect",
        },
      },
    });
    expect(wrapper.find(".certification-info h4").text()).toEqual(
      "Azure Solutions Architect"
    );
    expect(wrapper.find(".certification-info img").attributes("src")).toEqual(
      "images/azure-solutions-architect-expert-600x600.png"
    );
    expect(wrapper.find(".certification-info img").attributes("alt")).toEqual(
      "azure-solutions-architect"
    );
  });
});
