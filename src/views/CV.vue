<template lang="">
  <div class="cv-container">
    <section class="cv-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>CV</h2>
        </div>
        <div class="page-content">
          <div class="grid grid-cols-2">
            <div class="block-content">
              <BlockTitle title="Education" />
              <div class="timeline">
                <TimelineItem
                  v-for="item in educationItems"
                  :key="item.title"
                  :timeline-item="item"
                />
              </div>
            </div>
            <div class="block-content">
              <BlockTitle title="Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import BlockTitle from "@/components/BlockTitle.vue";
import TimelineItem from "@/components/TimelineItem.vue";

export default {
  name: "CV",
  components: {
    BlockTitle,
    TimelineItem,
  },
  data() {
    return {
      educationItems: [],
    };
  },
  async mounted() {
    await this.loadEducationItems();
  },
  methods: {
    loadEducationItems: async function () {
      axios.get("/data/education.json").then((response) => {
        this.educationItems = response.data;
        console.log(this.educationItems);
      });
    },
  },
};
</script>
<style lang="postcss" scoped>
.cv-content {
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

.timeline {
  @apply py-4 border-l-2;
}
</style>
