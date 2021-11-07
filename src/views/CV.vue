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
                <TimelineItem :timeline-item="this.timelineItem"/>
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
      timelineItem: {
        title: "Bachelor of Science in Computer Science",
        date: "2011 - 2015",
        company: "University of Waterloo",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      }
    };
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
