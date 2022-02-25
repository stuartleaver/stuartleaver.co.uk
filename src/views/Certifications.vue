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
          <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
      await axios
        .get("/data/certifications.json")
        .then((response) => {
          this.certifications = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
  @apply text-white lg:text-5xl sm:text-4xl font-semibold;
}

.page-content {
  @apply px-12 py-8;
}

@media only screen and (max-width: 1036px) {
  .certifications-content {
    @apply mx-4;
  }
}

@media only screen and (max-width: 769px) {
  .certifications-content {
    @apply mx-4;
  }
}
</style>
