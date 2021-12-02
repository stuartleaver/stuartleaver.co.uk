import { shallowMount } from "@vue/test-utils";
import Blog from "@/views/Blog.vue";
import axios from "axios";

jest.mock("axios");

describe("Blog.vue", () => {
  it("renders componant", () => {
    axios.get.mockResolvedValueOnce(items);

    const wrapper = shallowMount(Blog);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title element", () => {
    axios.get.mockResolvedValueOnce(items);

    const wrapper = shallowMount(Blog);
    expect(wrapper.find(".page-header h2").text()).toEqual("Blog");
  });
});

const items = {
  data: [
    {
      id: 368,
      date: "2020-04-27T19:09:07",
      link: "https://stuartleaver.dev/flight-tracker-real-time-app-with-azure-functions-signalr-and-cosmosdb/",
      title: {
        rendered:
          "Flight Tracker &#8211; Real-time app with Azure Functions, SignalR and CosmosDB",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            media_details: {
              width: 2560,
              height: 1384,
              file: "2020/04/hal9001-AKYjr-kmYtQ-unsplash-scaled.jpg",
              sizes: {
                medium: {
                  file: "hal9001-AKYjr-kmYtQ-unsplash-300x162.jpg",
                  width: 300,
                  height: 162,
                  mime_type: "image/jpeg",
                  source_url:
                    "https://stuartleaver.dev/wp-content/uploads/2020/04/hal9001-AKYjr-kmYtQ-unsplash-300x162.jpg",
                },
              },
              original_image: "hal9001-AKYjr-kmYtQ-unsplash.jpg",
            },
          },
        ],
      },
    },
  ],
};
