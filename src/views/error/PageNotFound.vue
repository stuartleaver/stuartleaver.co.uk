<template>
  <div class="error-container">
    <section class="error-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>Error</h2>
        </div>
        <div class="flex flex-col">
          <h1 class="error-code">404</h1>
          <p class="error-text">
            Oops. The page you're looking for doesn't exist.
          </p>
          <router-link to="/" class="button button-outline">Home</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
<style lang="postcss" scoped>
.error-content {
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

.error-code {
  @apply text-9xl font-semibold py-8;
}

.error-text {
  @apply pb-4;
}

.button {
  @apply px-5 py-3 shadow-sm rounded leading-snug whitespace-nowrap text-base font-semibold mx-auto mb-8;
}

.button-outline {
  @apply text-white bg-blue-500 hover:bg-blue-600;
}

@media only screen and (max-width: 1036px) {
  .error-content {
    @apply mx-4;
  }
}

@media only screen and (max-width: 769px) {
  .error-content {
    @apply mx-4;
  }
}
</style>
