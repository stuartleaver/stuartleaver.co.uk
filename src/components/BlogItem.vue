<template>
  <div class="item-block">
    <div class="item-info">
      <img class="item-image" :src="item.image" />
      <h4>{{ item.title }}</h4>
      <p>{{ item.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogItem",
  props: {
    item: Object,
  },
  mounted() {
    console.log(this.item);
    console.log(this.item.title);
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
  @apply h-32 w-32 m-auto mb-3;
}
</style>
