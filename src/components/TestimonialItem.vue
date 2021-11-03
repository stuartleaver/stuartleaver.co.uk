<template>
  <div class="testimonial-item">
    <div class="testimonial-content">
      <div class="testimonial-picture">
        <img src="images/testimonial.jpg" />
      </div>
      <div class="testimonial-text">
        <p>
          Donec eu est vel metus consequat volutpat. Nunc aliquet euismod
          mauris, a feugiat urna ullamcorper non.
        </p>
      </div>
      <div class="testimonial-author-info">
        <h5 class="testimonial-author">John Doe</h5>
        <p class="testimonial-role">CEO, Company</p>
      </div>
      <div class="testimonial-icon">
        <font-awesome-icon :icon="['fa', 'quote-left']" size="sm" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestimonialItem",
};
</script>

<style lang="postcss" scoped>
.testimonial-item {
  @apply p-7 mb-2;
}

.testimonial-content {
  @apply relative bg-white border-2 rounded-lg pt-7 pr-5 pb-5 pl-14;
}

.testimonial-text {
  @apply text-left;
}

.testimonial-picture {
  @apply absolute -top-7 -left-7 w-20 h-20 border-0 rounded-full overflow-hidden;
}

.testimonial-author-info {
  @apply mt-4;
}

.testimonial-author {
  @apply text-sm font-semibold text-left;
}

.testimonial-role {
  @apply text-xs text-gray-500 text-left;
}

.testimonial-icon {
  @apply absolute left-7 bottom-10 text-gray-300;
}
</style>
