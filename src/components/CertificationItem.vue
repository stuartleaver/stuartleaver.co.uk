<template>
  <div class="certification-block">
    <div class="certification-info">
      <img
        class="certification-image"
        :src="'images/' + certification.image"
        :alt="certification.imageAlt"
      />
      <h4>{{ certification.title }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "CertificationItem",
  props: {
    certification: Object,
  },
};
</script>
<style lang="postcss" scoped>
.certification-block {
  @apply mb-7 mt-3;
}

.certification-info h4 {
  @apply text-base font-semibold;
}

.certification-image {
  @apply h-32 w-32 m-auto mb-3;
}
</style>
