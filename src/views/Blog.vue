<template>
  <div class="blog-container">
    <section class="blog-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>Blog</h2>
        </div>
        <div class="page-content">
          <div class="grid grid-cols-2"><BlogItem :item="item" /></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BlogItem from "@/components/BlogItem.vue";

export default {
  name: "Blog",
  components: {
    BlogItem,
  },
  data() {
    return {
      item: {
        title: "Test blog",
        date: "1st Oct 2021",
        image: "photo.png",
      },
    };
  },
};
</script>
<style lang="postcss" scoped>
.blog-content {
  @apply max-w-5xl mx-auto;
}

.section-inner {
  @apply rounded-2xl overflow-hidden bg-white;
}

.page-header {
  @apply bg-blue-500 px-12 py-8;
}

.page-header h2 {
  @apply text-white text-5xl font-semibold;
}

.page-content {
  @apply px-12 py-8;
}

.block-content {
  @apply px-4;
}
</style>
