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
              <span class="roles">Software Engineering God</span>
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
        <div class="page-content">Content</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="postcss" scoped>
.home-container {
}

.home-content {
  @apply max-w-5xl mx-auto;
}

.section-inner {
  @apply rounded-2xl overflow-hidden;
}

.page-header {
  @apply bg-blue-500 p-12;
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
</style>
