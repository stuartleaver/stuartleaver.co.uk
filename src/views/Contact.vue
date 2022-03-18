<template>
  <div>
    <div class="contact-container">
      <section class="contact-content">
        <div class="section-inner">
          <div class="page-header">
            <h2>Contact</h2>
          </div>
          <div class="flex flex-col">
            Please use LinkedIn to contact me for professional enquires. For all
            other options, please use my other socials.
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style lang="postcss" scoped>
.contact-content {
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
</style>
