<template>
  <div class="item-block">
    <div class="item-info">
      <img class="item-image" :src="item.image" :alt="item.imageAlt" />
      <h4 v-html="item.title" />
      <p>{{ formatDate }}</p>
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
</style>
