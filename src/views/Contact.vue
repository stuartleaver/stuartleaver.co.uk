<template>
  <div>
    <div class="contact-container">
      <section class="contact-content">
        <div class="section-inner">
          <div class="page-header">
            <h2>Contact</h2>
          </div>
          <div class="">
            <p>
              Please use LinkedIn to contact me for professional enquires. For
              all other options, please use my other socials.
            </p>
            <div class="socials">
              <div class="social-link bg-linkedin-blue">
                <a
                  href="https://uk.linkedin.com/in/stuartleaveruk"
                  target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    size="lg"
                  />&nbsp;LinkedIn</a
                >
              </div>
              <div class="social-link bg-github-black">
                <a href="https://github.com/stuartleaver" target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'github']"
                    size="lg"
                  />&nbsp;GitHub</a
                >
              </div>
              <div class="social-link bg-twitter-blue">
                <a href="https://twitter.com/stuartleaveruk" target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'twitter']"
                    size="lg"
                  />&nbsp;Twitter</a
                >
              </div>
              <div class="social-link bg-instagram-magenta">
                <a
                  href="https://www.instagram.com/stuartleaver/"
                  target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'instagram']"
                    size="lg"
                  />&nbsp;Instagram</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style lang="postcss" scoped>
.contact-content {
  @apply max-w-5xl mx-auto;
}

.section-inner {
  @apply rounded-2xl overflow-hidden bg-white;
}

.page-header {
  @apply bg-blue-500 px-12 py-8;
}

.page-header h2 {
  @apply text-white lg:text-5xl sm:text-4xl font-semibold;
}

.page-content {
  @apply px-12 py-8;
}

p {
  @apply p-8;
}

.socials {
  @apply flex flex-wrap justify-center;
}

.social-link {
  @apply w-52 mx-auto text-white p-2 rounded mb-4;
}

@media (max-width: 35em) {
  .social-link {
    @apply flex-col;
  }
}

@media only screen and (max-width: 1036px) {
  .contact-container {
    @apply mx-4;
  }
}

@media only screen and (max-width: 769px) {
  .contact-container {
    @apply mx-4;
  }
}
</style>
