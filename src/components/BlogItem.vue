<template>
  <div class="item-block">
    <div class="item-info">
      <a class="item-link" :href="item.link" target="_blank">
        <img class="item-image" :src="item.image" :alt="item.imageAlt" />
        <h4 v-html="item.title" />
        <p class="image-date">{{ formatDate }}</p>
      </a>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "BlogItem",
  props: {
    item: Object,
  },
  computed: {
    formatDate() {
      return moment(this.item.date).format("Do MMM YYYY");
    },
  },
};
</script>
<style lang="postcss" scoped>
.item-block {
  @apply mb-7 mt-3;
}

.item-info h4 {
  @apply text-base font-semibold;
}

.item-image {
  @apply m-auto mb-3;
}

.item-link:hover {
  @apply text-blue-500;
}

.image-date {
  @apply text-xs text-gray-500 mt-2;
}
</style>
