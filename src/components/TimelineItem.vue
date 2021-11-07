<template>
  <div class="timeline-item">
    <h4 class="item-title">{{ timelineItem.title }}</h4>
    <span class="item-date">{{ timelineItem.date }}</span>
    <span class="item-company">{{ timelineItem.company }}</span>
    <p class="item-desctiption">
      {{ timelineItem.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "TimelineItem",
  props: {
    timelineItem: Object,
  },
};
</script>
<style lang="postcss" scoped>
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
