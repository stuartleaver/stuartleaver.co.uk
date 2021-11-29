<template>
  <div class="home-container">
    <section class="home-content">
      <div class="section-inner">
        <div class="page-header">
          <div class="row">
            <div class="photo">
              <img src="images/photo.png" />
            </div>
            <div class="header">
              <h1>Stuart Leaver</h1>
              <span class="roles">Software Engineer</span>
              <div class="social-media-links">
                <a href="https://github.com/stuartleaver" target="_blank"
                  ><font-awesome-icon :icon="['fab', 'github']" size="lg"
                /></a>
                <a href="https://twitter.com/stuartleaveruk" target="_blank"
                  ><font-awesome-icon :icon="['fab', 'twitter']" size="lg"
                /></a>
                <a
                  href="https://uk.linkedin.com/in/stuartleaveruk"
                  target="_blank"
                  ><font-awesome-icon :icon="['fab', 'linkedin']" size="lg"
                /></a>
                <a
                  href="https://www.instagram.com/stuartleaver/"
                  target="_blank"
                  ><font-awesome-icon :icon="['fab', 'instagram']" size="lg"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="page-content">
          <div class="about-me">
            <BlockTitle title="About Me" />
            <p>
              Passionate, responsible and committed engineer, with a
              get-it-done, on-time spirit, with more than 10 years’ experience
              delivering products to supply and support critical insight and
              information data using Microsoft Technologies, C#, n-tier
              architecture and more. Microsoft Certified Azure Developer and
              proficient in C#, best practices, design patterns and the software
              development lifecycle and communicating both within teams based
              across the globe and with stakeholders to illicit and understand
              functional requirements.
            </p>
          </div>
          <!-- <div class="download-cv">
            <a href="" class="cv-button">Download CV</a>
          </div> -->
          <div class="testimonials">
            <BlockTitle title="Testimonials" />
            <div class="grid grid-cols-2">
              <TestimonialItem
                v-for="testimonial in testimonials"
                :key="testimonial.author"
                :testimonial="testimonial"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import TestimonialItem from "@/components/TestimonialItem.vue";
import BlockTitle from "@/components/BlockTitle.vue";

export default {
  name: "Home",
  components: {
    TestimonialItem,
    BlockTitle,
  },
  data() {
    return {
      testimonials: [],
    };
  },
  async mounted() {
    await this.loadTestimonials();
  },
  methods: {
    loadTestimonials: async function () {
      axios.get("/data/testimonials.json").then((response) => {
        this.testimonials = response.data;
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.home-container {
}

.home-content {
  @apply max-w-5xl mx-auto;
}

.section-inner {
  @apply rounded-2xl overflow-hidden bg-white;
}

.page-header {
  @apply mb-8 bg-blue-500 p-12;
}

.page-content {
  @apply bg-white;
}

.row {
  @apply flex justify-between;
}

.photo {
  @apply max-w-xxs -mb-20 border-4 border-white shadow-md;
}

.header {
  @apply flex-1 text-center text-white;
}

.header h1 {
  @apply mt-8 text-5xl font-bold leading-normal;
}

.roles {
  @apply text-lg;
}

.social-media-links {
  @apply mt-5;
}

.social-media-links a {
  @apply rounded-full bg-white w-9 h-9 text-gray-500 inline-block leading-9 mr-2;
}

.social-media-links a:last-child {
  @apply mr-0;
}

.page-content {
  @apply pt-5 px-12 pb-12;
}

.about-me {
  @apply mb-8;
}

.about-me p {
  @apply text-sm font-normal text-left;
}

.download-cv {
  @apply mb-8 text-left;
}

.cv-button {
  @apply bg-white hover:shadow-lg font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}
</style>
