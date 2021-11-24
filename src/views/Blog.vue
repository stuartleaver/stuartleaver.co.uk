<template>
  <div class="blog-container">
    <section class="blog-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>Blog</h2>
        </div>
        <div class="page-content">
          <div class="grid grid-cols-2">
            <BlogItem v-for="item in items" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BlogItem from "@/components/BlogItem.vue";
import axios from "axios";

export default {
  name: "Blog",
  components: {
    BlogItem,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getBlogItems();
  },
  methods: {
    getBlogItems: async function () {
      await axios
        //   https://stuartleaver.dev/wp-json/wp/v2/posts?_embed
        .get("/api/getblogposts")
        .then((response) => {
          response.data.forEach((item) => {
            this.items.push({
              id: item.id,
              title: item.title.rendered,
              date: item.date,
              image:
                item._embedded["wp:featuredmedia"][0].media_details.sizes.medium
                  .source_url,
              imageAlt: item._embedded["wp:featuredmedia"][0].alt_text,
              link: item.link,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
