<template>
  <div class="site-title">
    <a href="/" class="flex">
      <div class="flex justify-center">
        <div class="site-title-text">
          {{ firstName }} <span>{{ lastName }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "SiteTitle",
  props: {
    firstName: String,
    lastName: String,
  },
};
</script>
<style lang="postcss">
.site-title {
  @apply pl-3 mt-9 text-xl font-medium text-black;
}

.site-title-text span {
  @apply text-blue-500;
}

@media (max-width: 35em) {
  .site-title {
    @apply mt-0 align-middle;
  }

  .site-title-text,
  .site-title-text span {
    @apply text-white;
  }
}
</style>
