import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders componant", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the menu element", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("renders the correct number of options", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll(".site-menu-item")).toHaveLength(4);
  });

  it("renders the 'Home' menu option'", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll(".site-menu-item").at(0).text()).toEqual("Home");
  });

  it("renders the 'CV' menu option'", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll(".site-menu-item").at(1).text()).toEqual("CV");
  });

  it("renders the 'Certifications' menu option'", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll(".site-menu-item").at(2).text()).toEqual(
      "Certifications"
    );
  });

  it("renders the 'Blog' menu option'", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll(".site-menu-item").at(3).text()).toEqual("Blog");
  });
});
