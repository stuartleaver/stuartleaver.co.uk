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
                <div class="timeline-item">
                  <h4 class="item-title">Lorem Ipsum</h4>
                  <span class="item-date">2021</span>
                  <span class="item-company">Microsoft</span>
                  <p class="item-desctiption">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                </div>
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

export default {
  name: "CV",
  components: {
    BlockTitle,
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

.timeline-item {
  @apply relative px-5 py-4 ml-5 mb-5 border-l-2 border-blue-500 shadow-timeline text-left;
}

.timeline-item:last-child {
  @apply mb-0;
}

.timeline-item:before {
  @apply inline-block absolute bg-white rounded-xl w-3 h-3 top-5 -left-7/5 border-2 border-blue-500;
  content: "";
  z-index: 2;
}

.timeline-item:after {
  @apply inline-block absolute bg-blue-500 rounded-xl w-7 h-0.5 top-6 -left-7;
  content: "";
  z-index: 1;
}

.timeline-item .item-title {
  @apply text-base font-semibold;
}

.timeline-item .item-date {
  @apply text-xs text-blue-500 mb-2;
}

.timeline-item .item-company {
  @apply text-xs text-gray-500 ml-2 mb-2 pl-2  border-l-2;
}

.timeline-item p {
  @apply text-sm;
}
</style>
