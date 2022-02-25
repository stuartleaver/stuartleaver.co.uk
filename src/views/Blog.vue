<template>
  <div class="blog-container">
    <section class="blog-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>Blog</h2>
        </div>
        <div class="page-content">
          <Loader v-if="loading" />
          <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <BlogItem v-for="item in items" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BlogItem from "@/components/BlogItem.vue";
import Loader from "@/components/Loader.vue";
import axios from "axios";

export default {
  name: "Blog",
  components: {
    BlogItem,
    Loader,
  },
  data() {
    return {
      items: [],
      loading: false,
    };
  },
  mounted() {
    this.getBlogItems();
  },
  methods: {
    getBlogItems: async function () {
      this.loading = true;

      await axios
        // .get("/data/blog.json")
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

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);

          this.loading = false;
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
  @apply text-white lg:text-5xl sm:text-4xl font-semibold;
}

.page-content {
  @apply px-12 py-8;
}

.block-content {
  @apply px-4;
}

@media only screen and (max-width: 1036px) {
  .blog-content {
    @apply mx-4;
  }
}

@media only screen and (max-width: 769px) {
  .blog-content {
    @apply mx-4;
  }
}
</style>
