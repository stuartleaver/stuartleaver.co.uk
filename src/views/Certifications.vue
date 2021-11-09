<template>
  <div class="certifications-container">
    <section class="certifications-content">
      <div class="section-inner">
        <div class="page-header">
          <h2>Certifications</h2>
        </div>
        <div
          class="page-content"
          v-for="group in this.certifications"
          :key="group.title"
        >
          <BlockTitle :title="group.title" />
          <div class="grid grid-cols-3">
            <CertificationItem
              v-for="certification in group.certifications"
              :key="certification.title"
              :certification="certification"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import BlockTitle from "@/components/BlockTitle.vue";
import CertificationItem from "@/components/CertificationItem.vue";

export default {
  name: "Certifications",
  components: {
    BlockTitle,
    CertificationItem,
  },
  data() {
    return {
      certifications: [],
    };
  },
  mounted() {
    this.loadCertifications();
  },
  methods: {
    loadCertifications: async function () {
      const response = await axios.get("/data/certifications.json");
      this.certifications = response.data;
    },
  },
};
</script>
<style lang="postcss" scoped>
.certifications-content {
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
</style>
